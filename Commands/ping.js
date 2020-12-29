module.exports = {
  name: 'ping',
  cooldown: 5,
  description: 'Ping!',
  execute(message, args) {
    message.channel.send('Pinging...').then(sent => {
      sent.edit(`This really doesn't mean anything...\nRoundtrip Latency: ${sent.createdTimestamp - message.createdTimestamp}ms.`)
    });
  },
};
