module.exports = {
  name: 'wii',
  aliases: ['wiisong', 'wii-song', 'playwii'],
  description: 'Plays the wii song for 10 hours.',
  guildOnly: true,
  execute(message, args) {
    const connection = message.guild.me.voice.connection
    const ytdl = require('ytdl-core');
    const link = args[0]

    message.member.voice.channel.join().then(connection => {
      const stream = ytdl('https://www.youtube.com/watch?v=Twi92KYddW4', { filter: 'audioonly' });
      const dispatcher = connection.play(stream);
      message.channel.send('Playing wii song!')

      dispatcher.on('finish', () => voiceChannel.leave());
    })
  },
};
