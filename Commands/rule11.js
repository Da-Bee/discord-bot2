module.exports = {
  name: 'rule11',
  aliases: ['r11'],
  description: 'Pulls rule 11 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**CHANGE** - These rules are subject to change without notice.')
  },
};
