module.exports = {
  name: 'ban',
  description: 'Bans a user!',
  guildOnly: true,
  usage: '<user>',
  permissions: 'BAN_MEMBERS',
  execute(message) {
    if (!message.mentions.users.size) {
      return message.reply('You need to tag a user in order to ban them!');
    }
    const user = message.mentions.users.first();
    message.guild.members.ban(user);
    message.channel.send(`Successfully banned ${user}!`);
  },
};
