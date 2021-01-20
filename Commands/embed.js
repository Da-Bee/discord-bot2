const Discord = require('discord.js');

module.exports = {
  name: 'embed',
  description: 'Creates an embed with the given text.',
  cooldown: 1,
  execute(message, args) {
    const c = args[0]
    if (c.includes('#'))  {
      message.delete()
       const customEmbed = new Discord.MessageEmbed()
        .setColor(`${c}`)
        .setTitle(`${message.content.slice(14, message.content.length)}`)

      message.channel.send(customEmbed);
    } else if (!c.includes('#') || c.length != '7') {
      message.delete()
       const niceEmbed = new Discord.MessageEmbed()
        .setColor(`#0099ff`)
        .setTitle(`${message.content.slice(6, message.content.length)}`)

      message.channel.send(niceEmbed);
    }
  }
}
