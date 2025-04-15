import { NextApiRequest, NextApiResponse } from 'next';
import {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Events,
  WebhookClient,
  ComponentType,
  Partials,
} from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel],
});

const token = 'MTMyODY2MjQ5MTU2MzI5NDcyMA.GygYWK.hHx60t9ZeXwKaYe5yypp5n5n7M40fM9UafMpss';
const channelId = '1361377769619198142';
const webhookUrl = 'https://discord.com/api/webhooks/1361377804452757706/o1NGOPNIMy7JSD3lhz0yMxRDbai1ELfcVZL6Qt-2W-26aPafPFdaGPoaqIrOEi9BPXBh'; // Webhook URL for embed response

const webhook = new WebhookClient({ url: webhookUrl });

client.once('ready', () => {
  console.log(`✅ Bot logged in as ${client.user?.tag}`);
});

if (!client.isReady()) {
  client.login(token).catch(console.error);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method not allowed');

  const {
    characterName,
    characterAge,
    backstory,
    goals,
    rpExperience,
    age,
    whyJoin,
    scenario1,
    scenario2,
    scenario3,
    discordUser,
  } = req.body;

  try {
    if (!client.isReady()) {
      return res.status(503).json({ error: 'Bot is not ready yet' });
    }

    const channel = await client.channels.fetch(channelId);
    if (!channel?.isTextBased()) {
      return res.status(404).json({ error: 'Invalid channel' });
    }

    const embed = new EmbedBuilder()
      .setTitle('📝 New Whitelist Application')
      .setColor(0x00ff99)
      .setThumbnail(
        discordUser?.avatar
          ? `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`
          : 'https://cdn.discordapp.com/embed/avatars/0.png'
      )
      .addFields(
        { name: '👤 Discord User', value: `${discordUser.username} (${discordUser.id})` },
        { name: '🎂 Age', value: age },
        { name: '📝 Why Join', value: whyJoin || 'N/A' },
        { name: '👔 Character Name', value: characterName || 'N/A', inline: true },
        { name: '🔢 Character Age', value: characterAge || 'N/A', inline: true },
        { name: '📖 Backstory', value: backstory || 'N/A' },
        { name: '🎯 Goals', value: goals || 'N/A' },
        { name: '🎭 RP Experience', value: rpExperience || 'N/A' },
        { name: '🚔 Scenario 1', value: scenario1 || 'N/A' },
        { name: '🔫 Scenario 2', value: scenario2 || 'N/A' },
        { name: '💼 Scenario 3', value: scenario3 || 'N/A' }
      )
      .setTimestamp();

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId(`accept_${discordUser.id}`)
        .setLabel('✅ Accept')
        .setStyle(ButtonStyle.Success),
      new ButtonBuilder()
        .setCustomId(`reject_${discordUser.id}`)
        .setLabel('❌ Reject')
        .setStyle(ButtonStyle.Danger)
    );

    const sentMessage = await (channel as any).send({
      embeds: [embed],
      components: [row],
    });

    const collector = sentMessage.createMessageComponentCollector({
      componentType: ComponentType.Button, // 10 mins
    });

    collector.on('collect', async (interaction) => {
      const [action, userId] = interaction.customId.split('_');
      const staffName = interaction.user.username;

      if (interaction.user.bot) return;

      await interaction.deferUpdate();

      const decisionEmbed = new EmbedBuilder()
        .setTitle(`🎮 Application ${action === 'accept' ? 'Accepted' : 'Rejected'}`)
        .setDescription(
          `**User:** <@${userId}>\n**Staff:** ${staffName}\n**Status:** ${
            action === 'accept' ? '✅ Accepted' : '❌ Rejected'
          }`
        )
        .setColor(action === 'accept' ? 0x00ff00 : 0xff0000)
        .setTimestamp();

      // Send embed to webhook
      await webhook.send({ embeds: [decisionEmbed] });

      // Try to DM the user
      try {
        const user = await client.users.fetch(userId);
        await user.send({
          embeds: [
            new EmbedBuilder()
              .setTitle('📜 Whitelist Application Result')
              .setDescription(
                `Your application has been **${action === 'accept' ? 'Accepted 🎉' : 'Rejected ❌'}** by **${staffName}**.`
              )
              .setColor(action === 'accept' ? 0x00ff00 : 0xff0000)
              .setTimestamp(),
          ],
        });
      } catch (e) {
        console.warn(`⚠️ Could not send DM to user: ${userId}`);
      }

      // Disable buttons after interaction
      const disabledRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
        row.components.map((btn) => ButtonBuilder.from(btn).setDisabled(true))
      );
      await sentMessage.edit({ components: [disabledRow] });

      collector.stop();
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('❌ Error submitting application:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
