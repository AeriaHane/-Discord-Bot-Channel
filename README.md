# [Discord] Bot Channel
Providing a bot-only channel. This bot will delete every message that is not a bot command or comes from a bot, in order to keep Off Topic chatter out of the requested channel.

------

## DISCLAIMER
This is not an actively maintained Repository. The code was written as part of a user request and has since been given over to be hosted by the user in question. It might be that things in here break with new updates of Discord.js or that they simply do not fit anymore. It might even be that things in their current state might not be working when it was first uploaded here. I might at some point clean up the code, but that is no guarantee.

I am not a programmer in js usually and I don't intend to go further into this language and library. The code is not supposed to be revolutionary but it did what it had to the at the time when I made it. 

------

## General Usage Agreement
* By using this you acknowledge that I will not respond to bugs, feature requests or support questions, as seen by above disclaimer
* You agree to any flaws this code may have and acknowledge to put in the time to fix them yourself
------
* You agree to not use this as your own original content and to acknowledge Aeria#9096 (186002153066725378) as the original creator of any content you use that has been posted by this account

------

## Setting Things Up
This Repository lets you create a Discord Channel only Bot Commands stay in. The one - and only - feature of this Discord Bot is sugercoated by everything you need to make it run without much setup, although the actual feature of the bot can also be implemented into a fitting other bot environment.

In order to run this bot from scratch, you need the following things:
* [NPM](https://www.npmjs.com/)
> npm install discord.js
* A config file with the following values:
  * Bot-Token
  * Prefix
  * Exclusion (Array) - This is an Array indicating the prefixes of other bots in the server

Here is a template for the config file~
**config.json**
```js
{
  "prefix": "",
  "exclusion": [""]
  
  "token": ""
}
```
