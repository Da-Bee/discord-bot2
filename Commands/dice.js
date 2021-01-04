module.exports = {
  name: 'dice',
  aliases: ['roll'],
  description: 'Rolls a dice.',
  execute(message, args) {
    const quiz = require('./dice.json');
		const item = quiz[Math.floor(Math.random() * quiz.length)];

    message.channel.send(item.tag)
  },
};
