module.exports = {
  name: 'rule12',
  aliases: ['r12'],
  description: 'Pulls rule 12 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**SCHOOL** - You must be or have been a member of a D125 feeder school.')
  },
};
