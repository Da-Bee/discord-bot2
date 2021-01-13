const Discord = require('discord.js');

module.exports = {
  name: 'rule9',
  aliases: ['r9'],
  description: 'Pulls rule 9 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    const rule9 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rule 9')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'Rule:', value: '**HACKING AND LEAKING** - "DDosing" or "Doxxing " will result in an AUTOMATIC BAN. Using alt accounts to bypass mutes and bans is against discord\'s TOS which will be a ban on that account and you will recieve a warning on your main.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Enforced by Bot?', value: 'No', inline: true },
        { name: 'Heavily Enforced?', value: 'Yes', inline: true },
      )
      .addField('Punishment if broken?', 'Ban and warn on main. Ban if DDosing of Doxxing.', true)
      .setTimestamp()
      .setFooter('Hello! This bot was designed by La-La#0001!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rule9);
  },
};
