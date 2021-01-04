module.exports = {
  name: 'sleep',
  aliases: ['slep'],
  description: 'You cannot sleep now, there are monsters nearby.',
  execute(message, args) {
    const quiz = require('./sleep.json');
		const item = quiz[Math.floor(Math.random() * quiz.length)];

    message.channel.send(item.tag)
  },
};
