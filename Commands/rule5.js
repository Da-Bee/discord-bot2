const Discord = require('discord.js');

module.exports = {
  name: 'rule5',
  aliases: ['r5'],
  description: 'Pulls rule 5 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    const rule5 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rule 5')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'Rule:', value: '**SCHOOL RULES** - Streaming your classes on zoom, sharing zoom links to kids not in your class or sharing photos of classmates that they are unaware of is outlawed by many districts and therefore NOT allowed here either.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Enforced by Bot?', value: 'Kinda', inline: true },
        { name: 'Heavily Enforced?', value: 'Kinda', inline: true },
      )
      .addField('Punishment if broken?', 'Muted and warned, depending on severity, could be a ban, or kick.', true)
      .setTimestamp()
      .setFooter('Hello!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rule5);
  },
};
