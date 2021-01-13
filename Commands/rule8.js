const Discord = require('discord.js');

module.exports = {
  name: 'rule8',
  aliases: ['r8'],
  description: 'Pulls rule 8 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    const rule8 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rule 8')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'Rule:', value: '**TOXICITY** - If you are repeatedly bringing negativity to the server you will be warned.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Enforced by Bot?', value: 'No', inline: true },
        { name: 'Heavily Enforced?', value: 'Kinda', inline: true },
      )
      .addField('Punishment if broken?', 'Muted and warned.', true)
      .setTimestamp()
      .setFooter('Hello! This bot was designed by La-La#0001!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rule8);
  },
};
