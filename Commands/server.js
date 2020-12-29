module.exports = {
  name: 'server',
  aliases: ['server-info'],
  description: 'Display info about this server.',
  guildOnly: true,
  execute(message) {
    message.channel.send(`**Server Name:** ${message.guild.name}\n**Total Members:** ${message.guild.memberCount}`);
  },
};
