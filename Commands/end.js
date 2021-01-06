module.exports = {
  name: 'end',
  aliases: ['disconnect'],
  description: 'Ends the music playing.',
  execute(message) {
    const connection = message.guild.me.voice.connection
    const dispatcher = connection.play('');
    dispatcher.destroy();
    connection.disconnect();
    message.channel.send('Ended the song and left the vc!')
  },
};
