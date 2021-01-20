const { ownerid } = require('../config.json');

module.exports = {
  name: 'scramble',
  description: 'Pulls a unscramble for the Unbelivaboat Coins',
  execute(message, args) {
    if (message.author.id === `${ownerid}`) {
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
    } else if (message.author.id != `${ownerid}`) {
      message.channel.send('You don\'t have permission to use this command!')
    }
  },
};
