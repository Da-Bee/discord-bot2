const Discord = require('discord.js')

module.exports = {
  name: 'unmute',
  description: 'Unmutes a user.',
  permissions: 'MANAGE_MESSAGES',
  async execute(message, client, args) {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if (!member) return message.channel.send('That member wasn\'t found!')

    const role = message.guild.roles.cache.find(r => r.id === '770664214989504522');

    await member.roles.remove(role)

    message.channel.send(`${member.displayName} is now unmuted.`)
  }
}
