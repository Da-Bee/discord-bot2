module.exports = {
  name: 'volume',
  aliases: ['vol'],
  description: 'Changes the volume of the music.',
  usage: '<fraction or percentage as decimal>',
  execute(message, args) {
    const connection = message.guild.me.voice.connection
    const dispatcher = connection.play('');
    const vol = args[0];
    dispatcher.setVolume(vol);
    message.channel.send(`Set sound volume to ${vol}!`)
  },
};
