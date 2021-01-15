const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
  name: 'afk',
  description: 'Sets your afk.',
  cooldown: 30,
  guildOnly: true,
  async execute(client, message, args) {
    const content = args.join(" ")
    await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
    const a = new Discord.MessageEmbed()
      .setDescription(`You have been set to afk\n**Reason:** ${content}`)
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setColor('#0099ff')

    message.channel.send(a);
  },
};
