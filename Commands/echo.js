module.exports = {
  name: 'echo',
  aliases: ['repeat'],
  description: 'repeats your words',
  usage: '<message>',
  execute(message, args) {
    message.delete()
    message.channel.send(message.content.slice(5, message.content.length));
  },
};
