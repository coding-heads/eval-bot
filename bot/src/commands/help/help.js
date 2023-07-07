import { SlashCommandBuilder } from 'discord.js';
import { sendErrorMessage, sendHelpMessage } from '../../utils';

export const data = new SlashCommandBuilder()
    .setName('help')
    .setDescription('Get help using this bot');
export async function execute(interaction) {
    await interaction.deferReply();
    try {
        await sendHelpMessage(interaction);
    } catch (err) {
        console.error(err);
        await sendErrorMessage(interaction, err);
    }
}
