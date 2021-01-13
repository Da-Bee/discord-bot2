const Discord = require('discord.js');

module.exports = {
  name: 'rule1',
  aliases: ['r1'],
  description: 'Pulls rule 1 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    const rule1 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rule 1')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'Rule:', value: '**Excessive Explicit Language** - NO spamming of any kind especially swears; refrain from using them in the first place if possible. This is very flexible so don\'t abuse.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Enforced by Bot?', value: 'Yes', inline: true },
        { name: 'Heavily Enforced?', value: 'No', inline: true },
      )
      .addField('Punishment if broken?', 'Mute for 5m, after multiple infractions, a warn.', true)
      .setTimestamp()
      .setFooter('Hello! This bot was designed by La-La#0001!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rule1);
  },
};
