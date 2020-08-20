const Discord = require('discord.js');
const prefix = process.env.PREFIX;
const fs = require('fs');

module.exports = {
	name : 'help',
    description : 'Guidance for playing this game',
    category : 'General',
    usage : prefix + ' help',
    example : prefix + ' help',

	execute(message, db) {
        const arg = message.content.split(prefix + "help ");
        let req = "";

        if (arg.length == 1) {
        req = "all";
        }
        else {
        req = arg[1];
        }

        const commandFiles = fs
        .readdirSync("./commands")
        .filter((file) => file.endsWith(".js"));

        const commands = [];
        const commandsDesc = [];
        const commandsUsage = [];
        const commandsExample = [];
        const categories = [];
        const categoryCommand = [];
        const categoryCommandDesc = [];
        const uncategorized = [];
        const uncategorizedDesc = [];

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            commands.push(command.name);
            commandsDesc.push(command.description);
            commandsUsage.push(command.usage);
            commandsExample.push(command.example);

            if (command.category === null || command.category === undefined) {
                uncategorized.push(command.name);
                uncategorizedDesc.push(command.description);
            }
            else {
                let found = false;
                let i = 0;
                while (i < categories.length && !found) {
                    if (command.category.toLowerCase() == categories[i]) {
                        found = true;
                    }
                    else {
                            i += 1;
                    }
                }

                if (!found) {
                    categories.push(command.category.toLowerCase());
                    categoryCommand.push([command.name]);
                    categoryCommandDesc.push([command.description]);
                }
                else {
                    categoryCommand[i].push(command.name);
                    categoryCommandDesc[i].push(command.description);
                }
            }
        }

        const outputEmbed = new Discord.MessageEmbed()
        .setColor('#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6))
        .setFooter("Made by : Another Joyful In Rain");

        if (req === "category" || req === "categories") {
            outputEmbed.setTitle("Categories List");

            let str = "";
            for (let i = 0; i < categories.length; i++) {
                str += `\`${categories[i]}\`, `;
            }

            outputEmbed.addField("Categories", str, true);
        }
        else if (req === "all") {
            outputEmbed.setTitle("Command List");

            for (let i = 0; i < categories.length; i++) {
                let str = "";
                for (let j = 0; j < categoryCommand[i].length; j++) {
                str += `\`${categoryCommand[i][j]}\`, `;
                }
                const title =
                categories[i].charAt(0).toUpperCase() + categories[i].slice(1);
                outputEmbed.addField(title, str, false);
            }

            let unctrstr = "";
            for (let i = 0; i < uncategorized.length; i++) {
                unctrstr += `\`${uncategorized[i]}\`, `;
            }

            if (unctrstr !== "") {
                outputEmbed.addField("Uncategorized", unctrstr, false);
            }
        }
        else if (commands.includes(req.toLowerCase())) {
            const idx = commands.findIndex((com) => com == req);
            const title =
                commands[idx].charAt(0).toUpperCase() + commands[idx].slice(1);

            outputEmbed.setTitle(title);
            outputEmbed.setDescription(commandsDesc[idx]);

            if (commandsUsage[idx] !== undefined) {
                outputEmbed.addField("Usage", commandsUsage[idx], false);
            }

            if (commandsExample[idx] !== undefined) {
                outputEmbed.addField("Example", commandsExample[idx], false);
            }
        }
        else if (categories.includes(req.toLowerCase())) {
            const idx = categories.findIndex((ctr) => ctr == req);
            const title =
                categories[idx].charAt(0).toUpperCase() + categories[idx].slice(1);

            outputEmbed.setTitle(title);

            for (let i = 0; i < categoryCommand[idx].length; i++) {
                outputEmbed.addField(
                categoryCommand[idx][i],
                categoryCommandDesc[idx][i],
                false,
                );
            }
        }

        return message.channel.send(outputEmbed);
    },
};