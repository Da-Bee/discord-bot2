const Discord = require('discord.js');

module.exports = {
  name: 'rule4',
  aliases: ['r4'],
  description: 'Pulls rule 4 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    const rule4 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rule 4')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'Rule:', value: '**BE APPROPRIATE** - Posting any kind of gore, sexual content, drug involving content or over the line dirty jokes is NOT allowed.' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Enforced by Bot?', value: 'Kinda', inline: true },
        { name: 'Heavily Enforced?', value: 'Yes', inline: true },
      )
      .addField('Punishment if broken?', 'Muted and warned, depending on severity, could be a ban, or kick.', true)
      .setTimestamp()
      .setFooter('Hello!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rule4);
  },
};
