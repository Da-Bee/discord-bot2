const Discord = require('discord.js');

module.exports = {
  name: 'rule12',
  aliases: ['r12'],
  description: 'Pulls rule 12 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    const rule12 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rule 12')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'Rule:', value: '**AGE** - In order to comply with Discord TOS, you must be over the age of 13 in order to be in this server. Being under 13 will result in a temp ban until you are of age.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Enforced by Bot?', value: 'No', inline: true },
        { name: 'Heavily Enforced?', value: 'Kinda', inline: true },
      )
      .addField('Punishment if broken?', 'BAN!', true)
      .setTimestamp()
      .setFooter('Hello! This bot was designed by La-La#0001!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rule12);
  },
};
