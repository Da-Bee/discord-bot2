module.exports = {
  name: 'addrole',
  aliases: ['add-role', 'roleadd'],
  permissions: 'MANAGE_ROLES',
  description: 'Adds the role. IDs ONLY!',
  usage: '<member> <role id>',
  guildOnly: true,
  execute(message, args) {
    try {
      const rn = args[1];
      const role = message.guild.roles.cache.find(role => role.id === `${rn}`);
      const member = message.mentions.members.first()
      member.roles.add(role);
      message.channel.send('Added the role!')
    } catch (error) {
      console.error(error);
      message.channel.send(`This error occured while using the command:\n\`${error.message}\``)
    }
  },
};
