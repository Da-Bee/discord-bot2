module.exports = {
  name: 'rule3',
  aliases: ['r3'],
  description: 'Pulls rule 3 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**BE KIND** - anything "below the belt", such as extremely rude jokes, or bullying is INTOLERABLE - bullying can result in an automatic ban.')
  },
};
