module.exports = {
  name: 'scramble',
  description: 'Pulls a unscramble for the Unbelivaboat Coins',
  guildOnly: true,
  permissions: 'MANAGE_GUILD',
  execute(message, args) {
		const quiz = require('./scramble.json');
		const item = quiz[Math.floor(Math.random() * quiz.length)];
		const filter = response => {
			return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
		};

		message.channel.send(item.question).then(() => {
			message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
				.then(collected => {
					message.channel.send(`${collected.first().author} got the correct answer!`);
				})
				.catch(collected => {
					message.channel.send('Looks like nobody unscrambled the word this time.');
				});
		});
  },
};
