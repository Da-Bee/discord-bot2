module.exports = {
  name: 'rule2',
  aliases: ['r2'],
  description: 'Pulls rule 2 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**DISCRIMINATION** - Posting ANY discriminating jokes, comments, photos, or content of any kind is INTOLERABLE - breaking this rule could result in an AUTOMATIC BAN.')
  },
};
