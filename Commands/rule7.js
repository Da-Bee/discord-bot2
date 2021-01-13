const Discord = require('discord.js');

module.exports = {
  name: 'rule7',
  aliases: ['r7'],
  description: 'Pulls rule 7 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    const rule7 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rule 7')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'Rule:', value: '**CHILL OUT** - Please let Staff handle any major arguments so we can take a more meaningful course of action.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Enforced by Bot?', value: 'No', inline: true },
        { name: 'Heavily Enforced?', value: 'No', inline: true },
      )
      .addField('Punishment if broken?', 'Mute? I honestly don\'t know...', true)
      .setTimestamp()
      .setFooter('Hello! This bot was designed by La-La#0001!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rule7);
  },
};
