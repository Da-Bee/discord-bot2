module.exports = {
  name: 'unban',
  description: 'Unban a previously banned user!',
  guildOnly: true,
  usage: '<user id>',
  permissions: 'BAN_MEMBERS',
  execute(message, args) {
    const id = args[0];
    message.guild.members.unban(id);
    message.channel.send('Unbanned user!');
  },
};
