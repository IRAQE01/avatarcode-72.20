const {prefix , token , GatewayIntentBits , Partials} = require ('./config.json');
const client = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent', GatewayIntentBits.Guilds],
  partials: [Partials.Channel],
});
client.on('messageCreate', message => {
    
  if (message.author.bot) return;

  const avatarUrl = message.author.displayAvatarURL({ dynamic: true, size: 512 });
  if (message.content === `${prefix}avatar`){
      message.channel.send(`${message.author.username}
      Avatar's ${avatarUrl}`)

  }
});
cliemt.login(token)
