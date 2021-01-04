module.exports = {
  name: 'youtube',
  aliases: ['youtubeplay', 'youtube-play', 'yt'],
  description: 'Plays a somg from provided youtube link.',
  usage: '<ytlink>',
  execute(message, args) {
    const connection = message.guild.me.voice.connection
    const ytdl = require('ytdl-core');
    const link = args[0]

    message.member.voice.channel.join().then(connection => {
      const stream = ytdl(`${link}`, { filter: 'audioonly' });
      const dispatcher = connection.play(stream);

      dispatcher.on('finish', () => voiceChannel.leave());
    })
  },
};
