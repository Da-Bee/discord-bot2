module.exports = {
  name: 'rule8',
  aliases: ['r8'],
  description: 'Pulls rule 8 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**TOXICITY** - If you are repeatedly brining negativity to the server you will be warned.')
  },
};
