module.exports = {
  name: 'staffecho',
  description: 'repeats your words, staff only.',
  usage: '<message>',
  permissions: 'MENTION_EVERYONE',
  execute(message, args) {
      message.delete()
      message.channel.send(message.content.slice(5, message.content.length));
  },
};
