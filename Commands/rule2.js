const Discord = require('discord.js');

module.exports = {
  name: 'rule2',
  aliases: ['r2'],
  description: 'Pulls rule 2 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    const rule2 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rule 2')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'Rule:', value: '**DISCRIMINATION** - Posting ANY discriminating jokes, comments, photos, or content of any kind is INTOLERABLE - breaking this rule could result in an AUTOMATIC BAN.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Enforced by Bot?', value: 'No', inline: true },
        { name: 'Heavily Enforced?', value: 'Yes', inline: true },
      )
      .addField('Punishment if broken?', 'Depends on the text, racial and homophobic jokes are banned.', true)
      .setTimestamp()
      .setFooter('Hello! This bot was designed by La-La#0001!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rule2);
  },
};
