const { ownerid } = require('../config.json');

module.exports = {
        name: 'shutdown',
        description: 'Shuts down the bot. BOT OWNER ONLY!!',
        execute(message) {
                if (message.author.id === `${ownerid}`) {
                message.channel.send('Shutting down...')        
                process.exit();
                } else if (message.author.id != `${ownerid}`) {
                        message.channel.send(`Only the bot owner can use this command, ${message.author}!`)
                }
                },
        };
