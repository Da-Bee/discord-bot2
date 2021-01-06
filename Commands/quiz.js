const { ownerid } = require('../config.json')

module.exports = {
  name: 'quiz',
  description: 'Pulls a quiz for the Unbelivaboat Coins',
  guildOnly: true,
  permissions: 'MANAGE_GUILD',
  execute(message, args) {
		if (message.author.id === `${ownerid}`) {
      const quiz = require('./quiz.json');
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
  					message.channel.send('Looks like nobody got the answer this time.');
  				});
  		});
    } else if (message.author.id !=`${ownerid}`) {
      message.channel.send('You don\'t have permissionto use this command!')
    }
  },
};
