module.exports = {
  name: 'rule12',
  aliases: ['r12'],
  description: 'Pulls rule 12 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**AGE** - In order to comply with Discord TOS, you must be over the age of 13 in order to be in this server. Being under 13 will result in a temp ban until you are of age.')
  },
};
