const Discord = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');
const db = require('pg');

dotenv.config();

const token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const db_url = process.env.DATABASE_URL;

const client = new Discord.Client();
const dbClient = new db.Client({
	connectionString : db_url,
	ssl : {
		rejectUnauthorized : false,
	},
});

dbClient.connect();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Sadikin RPG Bot is ready! Sadikin kuy!');
});

client.on('message', (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if(!client.commands.has(command)) return;
	try{
		client.commands.get(command).execute(message, dbClient);
	}
	catch(error) {
		console.log(error);
		message.reply('There\'s an error while executing this command');
	}
});

client.login(token);