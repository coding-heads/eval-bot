# Getting started with eval discord bot

## Install & Setup

First, copy the contents of `.env.template` to a new file called `.env` and paste the appropriate tokens.

```sh
cp .env.template .env
```

Next, run `npm install` from the root of the project to install npm dependencies.

## Register Commands

Register new slash commands with `node bot/deploy.commands.js`. Keep in mind you will need to re-run this command any time you create a new bot command.

## Run App

Invoke bot with `node bot/index.js`. This will launch the bot on your local machine. This process must be kept running in order to interact with the bot.

## Automated setup

You can start both the discord bot and piston engine by simply running `npm start` from the root of the project.

## Linting

The project is set up with eslint and prettier. To run the lint check, use the command `npm run lint` from the bot directory. To auto-fix issues use the command `npm run lint -- --fix`.
