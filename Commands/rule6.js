module.exports = {
  name: 'rule6',
  aliases: ['r6'],
  description: 'Pulls rule 6 of the server.',
  guildOnly: true,
  cooldown: 15,
  execute(message) {
    message.channel.send('**STAY ON TOPIC** - Please use channels the way they were meant to be used. Use the corresponding channel to the topic you want to discuss. You may be warned if you refuse to comply with Staff so if they ask you to move please listen.')
  },
};
