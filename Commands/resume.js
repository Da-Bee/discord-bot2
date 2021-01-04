module.exports = {
  name: 'resume',
  aliases: ['play'],
  description: 'Resumes the current song if paused.',
  execute(message) {
    const connection = message.guild.me.voice.connection
    const dispatcher = connection.play('');
    dispatcher.resume('');
    message.channel.send('Resumed the song!')
  },
};
