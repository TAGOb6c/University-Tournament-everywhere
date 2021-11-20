const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const options = {
    intents: [
      "GUILDS",
      "GUILD_MESSAGES"
      ],
 };
const client = new Client(options);

const { frank } = require('./assets/frank.json');

client.once('ready', () => {
  setInterval(() => {
    client.user.setActivity(`”お前ら”`, {
      type: 'WATCHING'
      });
    }, 600000)
  console.log(`${client.user.tag} is ready!`)
}); 

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (message.channel.name === 'どこでも大学トーナメントと触れ合う場所') {
  if (message.content.match('')) {
    message.channel.send(frank[
        Math.floor(Math.random() * frank.length)
        ])
        }
    });
});

client.login(token)
