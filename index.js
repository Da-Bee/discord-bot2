const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, ownerid, ownerping } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./Commands/${file}`);
  client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', async message => {
  if (message.author.bot) return;

  if (message.channel.id === '796105569835548683' && message.author.id != `${ownerid}`) return;

  if (message.channel.id === '796105569835548683' && message.author.id === '564555791030550528') {
    message.delete()
  }
  if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
	}

  if (message.channel.id === '773731912547565628' && message.content.endsWith('?')) {
    message.channel.send('<@663876333243203589>')
  }
  if (message.content === '<@793578516482228224>') {
    message.channel.send(`Hi! My prefix is: ${prefix}\nUse ${prefix}help for a list of my commands!`)
  }
  if (message.content === '+') {
    message.channel.send(`Getting ${ownerping}...`)
  }
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (command.guildOnly && message.channel.type === 'dm') {
    return message.reply('I can\'t execute that command inside DMs!');
  }

  if (command.permissions) {
    const authorPerms = message.channel.permissionsFor(message.member);
    if (!authorPerms || !authorPerms.has(command.permissions)) {
      return message.channel.send('You cannot use this command!');
    }
  }

  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }

    return message.channel.send(reply);
  }

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000
      return message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('There was an error trying to execute that command!');
  }
});

client.login(token);
