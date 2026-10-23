import { Client, GatewayIntentBits, EmbedBuilder, TextChannel, ButtonInteraction, Partials } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

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
const logChannelId = process.env.LOG_CHANNEL_ID!;

client.once('ready', () => {
  console.log(`✅ Bot logged in as ${client.user?.tag}`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  const [action, userId] = interaction.customId.split('_');
  const staffUser = interaction.user;

  const dmEmbed = new EmbedBuilder()
    .setColor(action === 'accept' ? 0x00ff00 : 0xff0000)
    .setTitle(action === 'accept' ? '🎉 Application Accepted!' : '🚫 Application Rejected')
    .setDescription(
      action === 'accept'
        ? 'Congratulations! Your whitelist application has been **accepted**. Welcome to IntrovertIRL RP!'
        : 'We regret to inform you that your whitelist application has been **rejected**. You may try again later.'
    )
    .setTimestamp();

  const logEmbed = new EmbedBuilder()
    .setColor(action === 'accept' ? 0x00ff00 : 0xff0000)
    .setTitle(`Whitelist ${action === 'accept' ? 'Accepted ✅' : 'Rejected ❌'}`)
    .setDescription(`${staffUser.tag} **${action}ed** application for <@${userId}>.`)
    .setTimestamp();

  try {
    await interaction.reply({
      content: `You have **${action}ed** the application for <@${userId}>.`,
      ephemeral: true,
    });

    const targetUser = await client.users.fetch(userId);
    await targetUser.send({ embeds: [dmEmbed] }).catch(() => {
      console.warn(`❌ Could not send DM to ${targetUser.tag}`);
    });

    const logChannel = client.channels.cache.get(logChannelId) as TextChannel;
    if (logChannel) {
      await logChannel.send({ embeds: [logEmbed] });
    }
  } catch (err) {
    console.error('❌ Error handling interaction:', err);
  }
});

client.login(token);
