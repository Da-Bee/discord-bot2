const Discord = require('discord.js');

module.exports = {
  name: 'rule13',
  aliases: ['r13'],
  description: 'Pulls rule 13 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    const rule13 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rule 13')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'Rule:', value: '**SCHOOL** - You must be or have been a member of a D125 feeder school.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Enforced by Bot?', value: 'No', inline: true },
        { name: 'Heavily Enforced?', value: 'Yes', inline: true },
      )
      .addField('Punishment if broken?', 'BAN!', true)
      .setTimestamp()
      .setFooter('Hello! This bot was designed by La-La#0001!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rule13);
  },
};
