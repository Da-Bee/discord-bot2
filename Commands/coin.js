module.exports = {
  name: 'coin',
  aliases: ['coinflip', 'cointoss', 'coin-toss'],
  description: 'Flips a coin!',
  execute(message, args) {
    const quiz = require('./coin.json');
		const item = quiz[Math.floor(Math.random() * quiz.length)];

    message.channel.send(item.tag)
  },
};
