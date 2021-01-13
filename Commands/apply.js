module.exports = {
  name: 'apply',
  description: 'Retrives the chill room staff application!',
  guildOnly: true,
  cooldown: 60,
  execute(message) {
    if (message.channel.id === '798987098102956052') {
      message.author.send('https://forms.gle/oqZ1561EUS1oz4Nh9\n\nFill this out to the best of your ability. Form will close at 3pm on 1/14. Good Luck!')
      message.reply(`Check your dms for the form! If you didn't recive it, check if you have dms disabled. Enable them, then try again.` )
    } else if (message.channel.id != '798987098102956052') {
      message.reply('You cannot use this command in this channel. Try using it in <#798987098102956052>. If you are unable to access this channel, this means you have not yet achived the required level!')
    }
  },
};
