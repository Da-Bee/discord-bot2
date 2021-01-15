module.exports = {
  name: 'echo',
  description: 'repeats your words',
  usage: '<message>',
  execute(message, args) {
    if (message.content.includes('@')) {
      message.channel.send('Your echo request includes a ping and therefore could not be executed.')
    } else {
      message.delete()
      message.channel.send(`${message.content.slice(5, message.content.length)}\n     **-${message.author.tag}, 2021**`);
    }
  },
};
