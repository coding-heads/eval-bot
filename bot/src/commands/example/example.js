import { SlashCommandBuilder } from 'discord.js';
import { buildEmbed } from '../../utils/embed';

export const data = new SlashCommandBuilder()
    .setName('example')
    .setDescription('Example/template command.');
export async function execute(interaction) {
    await interaction.reply(
        buildEmbed('Example description', '', '', [
            { name: 'Block subfield', value: 'this is a block subfield' },
            // Placeholder for future commands.
            { name: 'Inline subfield', value: 'this is a inline subfield', inline: true },
            { name: 'Inline subfield', value: 'this is a inline subfield', inline: true },
            { name: 'Inline subfield', value: 'this is a inline subfield', inline: true },
        ])
    );
}
