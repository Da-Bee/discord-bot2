module.exports = {
  name: 'rule10',
  aliases: ['r10'],
  description: 'Pulls rule 10 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**IGNORANCE** - Ignorance of these rules are no excuse for breaking them and will still result in a warning.')
  },
};
