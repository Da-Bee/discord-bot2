module.exports = {
  name: 'staffecho',
  description: 'repeats your words, staff only.',
  usage: '<message>',
  permissions: 'MENTION_EVERYONE',
  execute(message, args) {
      message.delete()
      message.channel.send(`${message.content.slice(10, message.content.length)}\n     **-${message.author.tag}, 2021**`);
  },
};
