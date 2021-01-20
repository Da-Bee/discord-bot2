const blacklist = require('../../models/blacklist')
const { Message } = require('discord.js')
const { ownerid } = require('../config.json')

module.exports = {
  name: 'blacklist',
  description: 'Blacklists a user from using the bot, owner locked.',
  async execute(message, client, args) {
    if (message.author.id != `${ownerid}`) return message.reply('This command is owner locked!')
    const User = message.guild.members.cache.get(args[0])
    if (!User) return message.channel.send('User is not valid.')

    blacklist.findOne({ id: User.user.id }, async(err, data) => {
      if(err) throw err;
      if(data) {
        message.channel.send(`**${User.displayName}** has already been blacklisted!`)
      } else {
        data = new blacklist({ id: User.user.id })
        data.save()
        .catch(err => console.log(err))
      message.channel.send(`${User.user.tag} has been added to blacklist.`)
      }

    })
  },
};
