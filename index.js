const {prefix , token , GatewayIntentBits , Partials} = require ('./config.json');
const client = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent', GatewayIntentBits.Guilds],
  partials: [Partials.Channel],
});
console.log(`
                     .___         ___.                  _________ ________        ________  _______   
  _____  _____     __| _/  ____   \_ |__   ___.__.  /\  \______  \\_____  \       \_____  \ \   _  \  
 /     \ \__  \   / __ | _/ __ \   | __ \ <   |  |  \/      /    / /  ____/        /  ____/ /  /_\  \ 
|  Y Y  \ / __ \_/ /_/ | \  ___/   | \_\ \ \___  |  /\     /    / /       \       /       \ \  \_/   \
|__|_|  /(____  /\____ |  \___  >  |___  / / ____|  \/    /____/  \_______ \  /\  \_______ \ \_____  /
      \/      \/      \/      \/       \/  \/                             \/  \/          \/       \/ 
`);
console.log('your bot is ready!');
console.log('code by 72.20');
console.log (`Discord id >> 877717735801487360`)
console.log(`progarmming >>  discord.gg/witon
services >> discord.gg/wick-s
community >> discord.gg/wick-c
wicks support >> discord.gg/kcz9VEBHp5`)
client.on('messageCreate', message => {
    
  if (message.author.bot) return;

  const avatarUrl = message.author.displayAvatarURL({ dynamic: true, size: 512 });
  if (message.content === `${prefix}avatar`){
      message.channel.send(`${message.author.username}
      Avatar's ${avatarUrl}`)

  }
});
cliemt.login(token)
