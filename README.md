# sadikin-rpg-bot
Start the journey as an Indomie Merchant, and conquer the culinary world!
A merchant RPG Bot

---------------------------

## About the bot
Basically this bot is just a training ground for who wants to learn making bot and use github.
We make this bot based on our beloved instant food (yes, we are fanatic) *Indomie*. 
Why the name is Sadikin? Because there is an Indomie stall named Sadikin that is always our favorite place for chatting and eating.

-----------------------------

## Bot Design
This bot has 3 main design : the game, the commands, and the database.

### Game Design
The game design based on Lemonade Tycoon

#### Core Loop
Buy Inventory -> Cook Inventory -> Sell Food -> Gain Money -> Buy Inventory/Upgrade Stall/Expand City

Main Objective : Collect all kind of Indomie by expanding the city.
Lose Condition : Minus networth with just 1 city left and no inventory to cook.

### Command Design
For now there are some commands that we want to implement. This repository is open for additional command (at least, read the **How to Contribute** section.)

#### General Commands
1. Start - Your first step in the game and initiate your own row in database
2. Rules - The rules of the game.
3. Help - Contain all of the commands that player can use. Add additional information that help the player how to start.

#### Merchant Commands
1. Cook - cooking to the customer (CD : 2m)
2. Delivery - cooking for the person who wants the food on delivery (CD : 1h)
3. Upgrade - upgrade the stall
4. Expand - expand the stall to another city
5. Fest - cooking for big festival (CD : 12h)
6. Recipes - changing the recipes by each city
7. Price - changing the prices by each city

#### Statistics Commands
1. Profile - See the profile, the net worth and list of city that the player get.
2. Inventory - See the inventory of the player
3. Cooldown - See the cooldown of each command and upgrade
4. City - Get the information about city prefered recipes, Indomie, tax, upgrade cost and possible threat
5. Tax - Get sum of tax that player must pay each week.

#### Economy Commands
1. Shop - For inventory, and upgrade requirement
2. Lootbox - For a chance get a bigger upgrade requirement
3. Buy
4. Sell
5. Give - give another player money
6. Trade - get another inventory thing buy trading it
7. Market - sell an upgrade requirement or thing in the inventory for all player

#### Gambling Commands
1. Coinflip - head or tail
2. Dice - 1 : -100%, 2 : -75%, 3 : -50%, 4 : +50%, 5 : +75%, 6 : +100%
3. Togel - guess 5 numbers and get the prize as much as it correct
4. Lottery - choose 1 random person from all players

#### More Coins Commands
1. Daily
2. Weekly

> Yes, this is more like EPIC RPG. But in different gameplay.

### Database Design
All design about database you can see in : https://dbdiagram.io/d/5f40cdb37b2e2f40e9de5fe4

-------------------------------------------
## How to Contribute
### As Programmer
1. Make sure you read this Readme
2. Clone this repository
3. `npm install` for get the dependecies that you need.
4. Make `.env` file to store the environment
5. Chat me : SorrowInRain#2851 in Discord for get the `Sadikin Test Bot Environment`
6. Make a new branch from `Development` and go experimental with that.

### As Designer
1. Just chat me for your proposal or make an issue with `proposal` tag
2. If you want to enhance the database, feel free to discuss it

### As Artist
1. We really need an emoji artist for a better UI for the bot commands.
2. Same as programmer, you need to do step 1,2,5,6.
3. Make a new folder in `Art` folder for your submission.

### As Donator
1. Just go to this link : https://www.patreon.com/join/sorrowinrain/ or https://trakteer.id/sorrowinrain-lxm3m
2. Any amount of help is highly appreciated.

-----------------------------

Have fun with this project ^_^
