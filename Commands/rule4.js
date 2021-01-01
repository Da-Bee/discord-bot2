module.exports = {
  name: 'rule4',
  aliases: ['r4'],
  description: 'Pulls rule 4 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**BE APPROPRIATE** - Posting any kind of gore, sexual content, drug involving content or over the line dirty jokes is NOT allowed.')
  },
};
