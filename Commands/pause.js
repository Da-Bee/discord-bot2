module.exports = {
  name: 'pause',
  description: 'Pauses the current song.',
  execute(message) {
    const connection = message.guild.me.voice.connection
    const dispatcher = connection.play('');
    dispatcher.pause();
    message.channel.send('Paused the song!');
  },
};
