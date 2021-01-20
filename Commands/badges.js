const Discord = require('discord.js');


module.exports = {
  name: 'badges',
  description: 'Pulls all of the users badges.',
  async execute(message, client, args) {
    const user = message.mentions.users.first() || message.author;

    const flags = user.flags.toArray()

    console.log(flags)

    message.channel.send(`${user}'s badges: ${flags.join(', ')}`)
  },
};
