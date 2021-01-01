module.exports = {
  name: 'rule1',
  aliases: ['r1'],
  description: 'Pulls rule 1 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**Excessive Explicit Language** - NO spamming of any kind especially swears; refrain from using them in the first place if possible. This is very flexible so don\'t abuse.')
  },
};
