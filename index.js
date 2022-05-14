const { Client, Intents } = require('discord.js');
const { token } = require('./assets/config.json');
const { frank } = require('./assets/frank.json');
const options = {
    intents: [
      "GUILDS",
      "GUILD_MESSAGES"
      ],
 };
const client = new Client(options);

client.once('ready', () => {
    client.user.setActivity(`”お前ら”`, {
      type: 'WATCHING'
    });
  console.log(`${client.user.tag} is ready!`)
}); 

client.login(token)

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (message.content.match('')) {
    message.channel.send(frank[
        Math.floor(Math.random() * frank.length)
        ])}
});
