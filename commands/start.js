const Discord = require('discord.js');
const prefix = process.env.PREFIX;

module.exports = {
	name : 'start',
    description : 'Start your journey as Indomie Merchant',
    category : 'General',
    usage : prefix + ' start',
    example : prefix + ' start',

	execute(message, db) {
        const OutputEmbed = new Discord.MessageEmbed()
        .setColor('#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6))
        .setTitle('Hello and welcome, ' + message.author.username)
        .setDescription('Start the journey as an Indomie Merchant, and conquer the culinary world!\n' +
        'Your objective is to collect all kind of Indomie from all around the world.\n' +
        'You will start your journey at *Bandung, Indonesia.*')
        .addFields(
            { 
                name : 'How do I play?',
                value : '🍜 **Gain Money** by selling your Indomie to the customer with `cook`.\n' +
                '🍜 **Careful**, cooking your Indomie needs ingredients. Always check your `inventory` before cooking.\n',
                inline : false,
            },

            { 
                name : 'What should I give attention?',
                value : '🍜 **Inventory**, you can\'t cook without ingredients.\n' +
                '🍜 **Taxes**, every week (Wednesday, 04.20 UTC) there will be a tax payment for each stall you have. See `tax` to find out about taxes of each city.\n' +
                '🍜 **Price**, you can control your price in `price`, but higher price make you have less consumer. Be wise with it without make you bankrupt.\n' +
                '🍜 **Recipes**, you can manage your own recipes in `recipes`, but being extreme on recipe could make consumer dislike your food.\n' +
                '🍜 **Upgradeable features**, you can upgrade your stall for each city with `upgrade`. These upgrades can make your income become better.\n' +
                '🍜 **Coins**, of course. No money, no things. You can get it by `cook`, and more by `daily`, `weekly` and `vote`.\n',
                inline : false,
            },

            {
                name : 'How do I expand my Indomie collection?',
                value : '🍜 When you have enough money and ready to expand your stall to another city (or even country), just type `expand` and you\'ll get a new stall, new Indomie variant and new customer.\n' +
                '🍜 But, another city, another rule. Maybe you\'ll get a higher taxes, a higher income or maybe a higher threat.\n',
                inline : false,
            },

            { 
                name : '\u200b', 
                value: 'Don\'t forget to see `rules` and `help` for more information about this game', 
                inline : false, 
            },
        )
        .setFooter('Congratulations, you are registered automatically to our game database.');

        db.query(`SELECT "UserID", "JoinTime" FROM public."User" WHERE public."User"."UserID" = ${message.author.id}`, (err, res) => {
            if(err) {
                console.log(err);
                return;
            }

            if(res.rowCount !== 0) {
                console.log(`Result found!`);
                console.log(res.rows);
            }
            else {
                console.log(`Result not found!`);
                db.query(`INSERT INTO public."User"("UserID", "JoinTime", "Banned", "Role") VALUES ('${message.author.id}', '${new Date()}', FALSE, 'Player')`, (insertErr, insertRes) => {
                    if(insertErr) {
                        console.log(insertErr);
                        return;
                    }

                    if(insertRes) {
                        console.log(` User ID : ${message.author.id}\n Gamertag : ${message.author.tag}\n Successfully registered as a new player.`);
                    }
                });
            }
        });

        return message.channel.send(OutputEmbed);
	},
};