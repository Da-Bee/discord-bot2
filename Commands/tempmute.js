const Discord = require('discord.js')
const ms = require('ms')
const { ownerid, ownerping, prefix } = require('../config.json')

module.exports = {
  name: 'tempmute',
  description: 'Mute a member for a given time.',
  permissions: 'MANAGE_MESSAGES',
  async execute(message, client, args) {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const time = (args[1]);
    if (!member) return message.channel.send('Member is not found.')
    if (!time) return message.channel.send('Please specify an amount of time to mute them for.')
    const role = message.guild.roles.cache.find(role => role.id === '770664214989504522')
    if (!role) return message.channel.send(`${ownerping}, please check the code and make sure the mute role's ID is inputted correctly.`)
    if (member.roles.cache.has(role.id)) return message.channel.send(`${member.displayName} has already been muted.`)
    await member.roles.add(role)
    const mute = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${member.displayName} has been muted for ${time}!`)
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addField('\u200B', `To unmute, use ${prefix}unmute ${member} to unmute them.`, true)
      .setTimestamp()
      .setFooter('GET MUTED!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(mute)

    setTimeout(async () => {
      await member.roles.remove(role)
      message.channel.send(`${member.displayName} is now unmuted due to automatic timeout from a temp mute.`)
    }, ms(time))
  },
};
