module.exports = {
  name: 'rule5',
  aliases: ['r5'],
  description: 'Pulls rule 5 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**SCHOOL RULES** - Streaming your classes on zoom, sharing zoom links to kids not in your class or sharing photos of classmates that they are unaware of is outlawed by many districts and therefore NOT allowed here either.')
  },
};
