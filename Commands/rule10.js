const Discord = require('discord.js');

module.exports = {
  name: 'rule10',
  aliases: ['r10'],
  description: 'Pulls rule 10 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    const rule10 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rule 10')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'Rule:', value: '**IGNORANCE** - Ignorance of these rules are no excuse for breaking them and will still result in a warning.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Enforced by Bot?', value: 'No', inline: true },
        { name: 'Heavily Enforced?', value: 'Yes', inline: true },
      )
      .addField('Punishment if broken?', 'Normal rule punishments.', true)
      .setTimestamp()
      .setFooter('Hello!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rule10);
  },
};
