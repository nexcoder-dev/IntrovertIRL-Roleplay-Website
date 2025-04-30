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
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  InteractionType,
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

const token = process.env.DISCORD_BOT_TOKEN!;
const channelId = process.env.LOG_CHANNEL_ID!;
const webhookUrl = process.env.WEBHOOKURL!;

const webhook = new WebhookClient({ url: webhookUrl });

client.once('ready', () => {
  console.log(`✅ Bot logged in as ${client.user?.tag}`);
});

if (!client.isReady()) {
  client.login(token).catch(console.error);
}

client.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.type !== InteractionType.ModalSubmit) return;
  if (!interaction.customId.startsWith('modal_')) return;

  const [_, action, userId] = interaction.customId.split('_');
  const reason = interaction.fields.getTextInputValue('reason_input');
  const staffName = interaction.user.username;

  const decisionEmbed = new EmbedBuilder()
    .setTitle(`🎮 Application ${action === 'accept' ? 'Accepted' : 'Rejected'}`)
    .setDescription(
      `**User:** <@${userId}>\n**Staff:** ${staffName}\n**Status:** ${
        action === 'accept' ? '✅ Accepted' : '❌ Rejected'
      }\n**Reason:** ${reason}`
    )
    .setColor(action === 'accept' ? 0x00ff00 : 0xff0000)
    .setTimestamp();

  await webhook.send({ embeds: [decisionEmbed] });

  try {
    const user = await client.users.fetch(userId);
    await user.send({
      embeds: [
        new EmbedBuilder()
          .setTitle('📜 Whitelist Application Result')
          .setDescription(
            `Your application has been **${action === 'accept' ? 'Accepted 🎉' : 'Rejected ❌'}** by **${staffName}**.\n**Reason:** ${reason}`
          )
          .setColor(action === 'accept' ? 0x00ff00 : 0xff0000)
          .setTimestamp(),
      ],
    });
  } catch {
    console.warn(`⚠️ Could not send DM to user: ${userId}`);
  }

  try {
    const message = await interaction.channel?.messages.fetch(interaction.message?.id || '');
    const disabledRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
      message.components[0].components.map((btn: any) =>
        ButtonBuilder.from(btn).setDisabled(true)
      )
    );
    await message.edit({ components: [disabledRow] });
  } catch (e) {
    console.error('⚠️ Failed to disable buttons:', e);
  }

  await interaction.reply({ content: `Application ${action}ed with reason.`, ephemeral: true });
});

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
      componentType: ComponentType.Button,
      time: 10 * 60 * 1000,
    });

    collector.on('collect', async (interaction) => {
      if (interaction.user.bot) return;

      const [action, userId] = interaction.customId.split('_');

      const modal = new ModalBuilder()
        .setCustomId(`modal_${action}_${userId}`)
        .setTitle(`${action === 'accept' ? 'Accept' : 'Reject'} Reason`);

      const reasonInput = new TextInputBuilder()
        .setCustomId('reason_input')
        .setLabel('Enter your reason')
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true);

      const modalRow = new ActionRowBuilder<TextInputBuilder>().addComponents(reasonInput);
      modal.addComponents(modalRow);

      await interaction.showModal(modal);
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('❌ Error submitting application:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}