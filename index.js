const {prefix , token} = require ('./config.json');
client.on('messageCreate', message => {
    
  if (message.author.bot) return;

  const avatarUrl = message.author.displayAvatarURL({ dynamic: true, size: 512 });
  if (message.content === `${prefix}avatar`){
      message.channel.send(`${message.author.username}
      Avatar's ${avatarUrl}`)

  }
});
cliemt.login(token)
