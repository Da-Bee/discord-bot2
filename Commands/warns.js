const db require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
  name: 'warns',
  aliases: ['warnings'],
  description: 'Warns tagged user.',
  permissions: 'MANAGE_MESSAGES',
  async execute(message, client, args) {
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!user) return message.channel.send('User not found.')
    const reason = args.slice(1).join(" ")
    db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
      if (err) throw err;
      if (data.content.length) {
        message.channel.send(new MessageEmbed()
          .setTitle(`${user.user.tag}'s warns`)
          .setDescription(
            data.content.map(
              (w, i) =>
              `\`${i + 1}\` | Moderator: ${message.guild.members.cache.get(w.moderator).user.tag}\nReason: ${w.reason}`
            )
          )
          .setColor('#0099ff')
      )
    } else {
      message.channel.send(`${user} has no warns!`)
    }
    })
  },
};
