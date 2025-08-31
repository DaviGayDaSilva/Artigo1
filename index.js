const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`🚀 Bot online! Nome: ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!ping') {
    message.channel.send('Pong! 🏓');
  }
});

client.login(process.env.BOT_TOKEN);
