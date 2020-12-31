module.exports = {
  name: 'user-info',
  description: 'Display info about yourself.',
  execute(message) {
    const user = message.mentions.users.first();
    message.channel.send(`${user}'s username: **${user.username}**\n${user}'s ID: ${user.id}`);
  },
};
