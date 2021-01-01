module.exports = {
  name: 'rule7',
  aliases: ['r7'],
  description: 'Pulls rule 7 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**CHILL OUT** - Please let Staff handle any major arguments so we can take a more meaningful course of action.')
  },
};
