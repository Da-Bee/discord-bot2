module.exports = {
  name: 'rule9',
  aliases: ['r9'],
  description: 'Pulls rule 9 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**HACKING AND LEAKING** - "DDosing" or "Doxxing " will result in an AUTOMATIC BAN. Using alt accounts to bypass mutes and bans is against discord\'s TOS which will be a ban on that account and you will recieve a warning on your main.')
  },
};
