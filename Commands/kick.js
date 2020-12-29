module.exports = {
  name: 'kick',
  description: 'Tag a member and kick them!',
  guildOnly: true,
  permissions: 'KICK_MEMBERS',
  Usage: '<user>',
  execute(message) {
    if (!message.mentions.users.size) {
      return message.reply('You need to tag a user in order to kick them!');
    }
    const member = message.mentions.members.first();
    member.kick();
    message.channel.send(`Successfully kicked ${member}!`)
  },
};
