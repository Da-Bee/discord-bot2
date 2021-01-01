module.exports = {
  name: 'rule13',
  aliases: ['r13'],
  description: 'Pulls rule 13 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**SCHOOL** - You must be or have been a member of a D125 feeder school.')
  },
};
