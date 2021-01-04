module.exports = {
  name: 'rickroll',
  aliases: ['rr'],
  description: 'Rickroll...',
  guildOnly: true,
  execute(message, args) {
    const connection = message.guild.me.voice.connection
    const ytdl = require('ytdl-core');
    const link = args[0]

    message.member.voice.channel.join().then(connection => {
      const stream = ytdl('https://youtu.be/dQw4w9WgXcQ', { filter: 'audioonly' });
      const dispatcher = connection.play(stream);

      dispatcher.on('finish', () => voiceChannel.leave());
    })
  },
};
