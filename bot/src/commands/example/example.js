const { SlashCommandBuilder } = require('discord.js');
const { buildEmbed } = require('../../utils/embed');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('example')
        .setDescription('Example/template command.'),
    async execute(interaction) {
        await interaction.reply(buildEmbed(
            'Example description',
            '',
            '',
            [
                { name: 'Block subfield', value: 'this is a block subfield' },
                // Placeholder for future commands.
                { name: 'Inline subfield', value: 'this is a inline subfield', inline: true },
                { name: 'Inline subfield', value: 'this is a inline subfield', inline: true },
                { name: 'Inline subfield', value: 'this is a inline subfield', inline: true },
            ]
        ));
    },
};