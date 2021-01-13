const Discord = require('discord.js');

module.exports = {
  name: 'rule6',
  aliases: ['r6'],
  description: 'Pulls rule 6 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    const rule6 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rule 6')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'Rule:', value: '**STAY ON TOPIC** - Please use channels the way they were meant to be used. Use the corresponding channel to the topic you want to discuss. You may be warned if you refuse to comply with Staff so if they ask you to move please listen.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Enforced by Bot?', value: 'No', inline: true },
        { name: 'Heavily Enforced?', value: 'No', inline: true },
      )
      .addField('Punishment if broken?', 'Reminders to do so, after multiple reminders, could be warned.', true)
      .setTimestamp()
      .setFooter('Hello! This bot was designed by La-La#0001!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rule6);
  },
};
