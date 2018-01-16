//beep boop dis is aria's code.

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.on("ready", () => {
  console.log("beep boop, starting up");
  client.user.setGame(`with your bots`);
});

prefix = config.prefix
exclusion = config.exclusion
allowMsg = false

client.on("message", (message) => {
  //bot msgs are coolio, we let them slide
  if (message.author.bot) {
      return;
  } else if(message.content.startsWith(prefix + "exclude")) { 
    //adding a prefix to the bot prefix list that we will let slide
    if(message.content.length > 9){
      var exclusionChar = message.content[message.content.length - 1]
            if (!(exclusion.indexOf(exclusionChar) > -1)) {
              //adding a prefix - successful
                config.exclusion.push(exclusionChar);
                fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
                message.channel.send("Went ahead and added `" + exclusionChar + "` to the command list.");
            } else {
              //prefix was already added
                message.channel.send("Dupes are boring, pick something better boi.");
            }
        } else {
          //no prefix given (space included)
            message.channel.send("No prefixes are bs, make better pl0x.")
        }
  } else if (!message.content.startsWith(prefix + "exclude")) {
    //checking if message started with one of the saved exclusion-prefix
      for (let i = 0; i < exclusion.length; i++) {
          if (message.content.startsWith(exclusion[i])) {
            //it's a bot command!
              allowMsg = true;
          }
      }
      if (allowMsg == false) {
        //deleting message, as it is not a bot command (starting with a saved prefix), nor a bot writing
          message.delete();
      }
  }
  allowMsg = false;
});

client.login(config.token);