const Discord = require('discord.js');

module.exports = {
  name: 'rule3',
  aliases: ['r3'],
  description: 'Pulls rule 3 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    const rule3 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rule 3')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'Rule:', value: '**BE KIND** - anything "below the belt", such as extremely rude jokes, or bullying is INTOLERABLE - bullying can result in an automatic ban.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Enforced by Bot?', value: 'No', inline: true },
        { name: 'Heavily Enforced?', value: 'Yes', inline: true },
      )
      .addField('Punishment if broken?', 'Depends on the text.', true)
      .setTimestamp()
      .setFooter('Hello! This bot was designed by La-La#0001!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rule3);
  },
};
