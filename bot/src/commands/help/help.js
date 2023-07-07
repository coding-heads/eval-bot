const { SlashCommandBuilder } = require('discord.js');
const { sendErrorMessage, sendHelpMessage } = require('../../utils');

module.exports = {
    data: new SlashCommandBuilder().setName('help').setDescription('Get help using this bot'),
    async execute(interaction) {
        await interaction.deferReply();
        try {
            await sendHelpMessage(interaction);
        } catch (err) {
            console.error(err);
            await sendErrorMessage(interaction, err);
        }
    },
};
