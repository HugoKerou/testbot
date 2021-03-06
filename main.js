const fs = require("fs");
const {Client, Collection} = require('discord.js');
const {TOKEN, PREFIX} = require('./config');
const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(commandFiles);

  for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`Commande chargée: ${command.name}`);
  }


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if(!message.content.startsWith(PREFIX) || message.author.bot) return; //lis pas ses messages

  const args = message.content.slice(PREFIX.length).split(/ +/);
  const command = args.shift().toLocaleLowerCase();
    
    if (!client.commands.has(command)) return;
    client.commands.get(command).execute(client, message, args);
});

client.login(process.env.TOKEN);
