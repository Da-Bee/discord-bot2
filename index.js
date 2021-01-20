const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, ownerid, ownerping, supportchannelid, supportchannel, gurshaan } = require('./config.json');
const db = require('quick.db');
const ms = require('ms');
const mongoose = require('mongoose');
const blacklist = require('./models/blacklist')
const warns = require('./models/warns')

mongoose.connect('mongodb+srv://aggaran21:Inte77hors@discord-bot.x2ypa.mongodb.net/Data', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(console.log('Connected to Mongo db!'))

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./Commands/${file}`);
  client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
  console.log('Logged on as CyberBug!');
});

client.on('message', async message => {
  if (message.author.bot) return;
  if (message.content === '<@793578516482228224>') {
    message.channel.send(`Hi! My prefix is: ${prefix}\nUse ${prefix}help for a list of my commands!`)
  }
  if (message.channel.id === `${supportchannelid}` && message.author.id === `${gurshaan}`) {
    message.delete();
  }

  if (message.channel.id === `${supportchannelid}` && message.author.id != `${ownerid}`) return;

  if (message.content === `${prefix}join` && message.author.id === `${ownerid}`) {
    client.emit('guildMemberAdd', message.member);
  }

  if (message.channel.id === '773731912547565628' && message.content.endsWith('?')) {
    message.channel.send('<@663876333243203589>')
  }
  if (message.content === '+') {
    message.channel.send(`Getting ${ownerping}...`)
  }
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  blacklist.findOne({ id: message.author.id }, async(err, data) => {
    if (err) throw err;
    if(!data) {
      if (!message.guild) return;
      if (!message.member) message.member = await message.guild.fetchMember(message);
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();
      if (cmd.length == 0) return;
      let command = client.commands.get(cmd)
      if (!command) command = client.commands.get(client.aliases.get(cmd));
      if (command) command.execute(message, args, client)
    } else {
      message.channel.send('You are blacklisted from using this bot!')
    }
  })

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
      return message.channel.send(`You cannot use this command! You need the ${permissions} permission to use this command!`);
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
    command.execute(message, args, client);
  } catch (error) {
    console.error(error);
    message.reply('There was an error trying to execute that command!');
  }
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.id === '749015533671940096');
	if (!channel) return;

	const welcome = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Welcome to The Chill Room!')
    .setThumbnail('https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif')
    .addFields(
      { name: '\u200B', value: 'The server for people from D125 feeder schools, specifically for Aptakisic Students!'},
      { name: '\u200B', value: '\u200B'},
      { name: 'Rules Channel:', value: 'Please check <#748933586450907297> for the latest set of rules for our server!', inline: false },
      { name: 'Role Selection:', value: 'To grab some roles, please go to <#748934281254141993> and get the roles you would like!', inline: false },
      { name: 'Chatting with friends:', value: 'To talk to your friends, go to <#748934237624729710>! Make sure to ping an online staff and let them know your name, grade and school!'},
    )
    .setTimestamp()
    .setFooter('Hello! This bot was designed by La-La#0001!', 'https://cdn.discordapp.com/attachments/748934237624729710/798720760130174986/ezgif-4-a9fddd02eb8b.gif');

  member.send(welcome);
});


client.login(token);
