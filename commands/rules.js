const Discord = require('discord.js');
const prefix = process.env.PREFIX;

module.exports = {
	name : 'rules',
    description : 'Rules of this game',
    category : 'General',
    usage : prefix + ' rules',
    example : prefix + ' rules',

	execute(message, db) {
        const OutputEmbed = new Discord.MessageEmbed()
        .setColor('#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6))
        .setTitle('Sadikin Indomie Merchant Rules')
        .setDescription('1. Do not use any script, macros or any form of automation bots.\n' +
        '2. Do not trade or sell in-game currency/things for anything outside the bots.\n' +
        '3. Do not abuse or benefits from exploits and bugs. If there\'s any case like that, please report that to Sadikin Indomie Merchant Support Server.\n' +
        '4. Do not harm or threating other players.\n')
        .setFooter('Any violation of the rules could possibly make your account getting banned temporarily or permanently.');

        return message.channel.send(OutputEmbed);
    },
};