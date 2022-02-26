const Discord = require('discord.js');
// essentialy allows us to load all the .env variables into a global variable that u can access anywhere in ur code with process.env
// store secrets at .env file like bot tokens
require('dotenv').config();

// pass some params to ensure that our bot is actually able to watch for the correct things
const client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
  // essentially , this tells the discord bot for what kind of things to look out for
});
// discord api calls discord servers guilds for some reason

// ready event listner - this is triggered when the bot successfully logs in with the provided token

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// message create listener = trigger whenever the bot sees someone sends a message
// it also pass in the info about the message that was sent
client.on('messageCreate', (msg) => {
  if (msg.content.match('potential')) {
    msg.reply('<:copium:947052930723348490>');
  }
  // all of the info in a text message stored in .content
});

client.login(process.env.TOKEN);
