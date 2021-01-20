const db require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
  name: 'warn',
  aliases: ['strike'],
  description: 'Warns tagged user.',
  permissions: 'MANAGE_MESSAGES',
  async execute(message, client, args) {
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!user) return message.channel.send('User not found.')
    const reason = args.slice(1).join(" ")
    db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
      if (err) throw err;
      if (!data) {
        data = new db({
          guildid: message.guild.id,
          user: user.user.id,
          content: [
            {
              moderator: message.author.id,
              reason: reason
            }
          ]
        })
      } else {
        const obj = {
          moderator: message.author.id,
          reason: reason
        }
        data.content.push(obj)
      }
      data.save
    });
    user.send(new MessageEmbed()
        .setDescription(`You have been warned for ${reason}`)
        .setColor('#eb3734')
    )
    message.channel.send(new MessageEmbed(
      .setDescription(`Warned ${user} for ${reason}`)
      .setColor('#0099ff')
    ))
  },
};
