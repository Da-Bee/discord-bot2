const Discord = require('discord.js');

module.exports = {
  name: 'rule11',
  aliases: ['r11'],
  description: 'Pulls rule 11 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    const rule11 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rule 11')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'Rule:', value: '**CHANGE** - These rules are subject to change without notice.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Enforced by Bot?', value: 'No', inline: true },
        { name: 'Heavily Enforced?', value: '?', inline: true },
      )
      .addField('Punishment if broken?', 'None?', true)
      .setTimestamp()
      .setFooter('Hello!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rule11);
  },
};
