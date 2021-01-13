const Discord = require('discord.js');
const { prefix } = require('../config.json')

module.exports = {
  name: 'rules',
  aliases: ['r'],
  description: 'Pulls all the rules of the server.',
  permissions: 'MANAGE_GUILD',
  guildOnly: true,
  cooldown: 60,
  execute(message) {
    const rules = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Rules: ')
      .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
      .addFields(
        { name: 'The Chill Room Rules:', value: `Run ${prefix}r<number> or ${prefix}rule<number> to get more info on that rule!`},
        { name: '\u200B', value:'\u200B'},
        { name: 'Rule 1:', value: '**Excessive Explicit Language** - NO spamming of any kind especially swears; refrain from using them in the first place if possible. This is very flexible so don\'t abuse.', inline: false },
        { name: 'Rule 2:', value: '**DISCRIMINATION** - Posting ANY discriminating jokes, comments, photos, or content of any kind is INTOLERABLE - breaking this rule could result in an AUTOMATIC BAN.', inline: false },
        { name: 'Rule 3:', value: '**BE KIND** - anything "below the belt", such as extremely rude jokes, or bullying is INTOLERABLE - bullying can result in an automatic ban.', inline: false },
        { name: 'Rule 4:', value: '**BE APPROPRIATE** - Posting any kind of gore, sexual content, drug involving content or over the line dirty jokes is NOT allowed.', inline: false },
        { name: 'Rule 5:', value: '**SCHOOL RULES** - Streaming your classes on zoom, sharing zoom links to kids not in your class or sharing photos of classmates that they are unaware of is outlawed by many districts and therefore NOT allowed here either.', inline: false },
        { name: 'Rule 6:', value: '**STAY ON TOPIC** - Please use channels the way they were meant to be used. Use the corresponding channel to the topic you want to discuss. You may be warned if you refuse to comply with Staff so if they ask you to move please listen.', inline: false },
        { name: 'Rule 7:', value: '**CHILL OUT** - Please let Staff handle any major arguments so we can take a more meaningful course of action.', inline: false },
        { name: 'Rule 8:', value: '**TOXICITY** - If you are repeatedly bringing negativity to the server you will be warned.', inline: false },
        { name: 'Rule 9:', value: '**HACKING AND LEAKING** - "DDosing" or "Doxxing " will result in an AUTOMATIC BAN. Using alt accounts to bypass mutes and bans is against discord\'s TOS which will be a ban on that account and you will recieve a warning on your main.', inline: false },
        { name: 'Rule 10:', value: '**IGNORANCE** - Ignorance of these rules are no excuse for breaking them and will still result in a warning.', inline: false },
        { name: 'Rule 11:', value: '**CHANGE** - These rules are subject to change without notice.', inline: false },
        { name: 'Rule 12:', value: '**AGE** - In order to comply with Discord TOS, you must be over the age of 13 in order to be in this server. Being under 13 will result in a temp ban until you are of age.', inline: false },
        { name: 'Rule 13:', value: '**SCHOOL** - You must be or have been a member of a D125 feeder school.', inline: false },
      )
      .setTimestamp()
      .setFooter('Hello! This bot was designed by La-La#0001!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

    message.channel.send(rules);
  },
};
