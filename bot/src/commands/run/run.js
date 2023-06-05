const { SlashCommandBuilder } = require('discord.js');
const { buildEmbed } = require('../../utils/embed');
const { executeCode } = require('../../../api/submit.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('run')
        .setDescription('Run and output code.')
        .addStringOption(param =>
            param.setName('language')
                .setDescription('please provide the language to execute.')
                .setRequired(true)
                .addChoices(
                    { name: 'javascript', value: 'javascript' },
                    { name: 'python', value: 'python' },
                ))
        .addStringOption(param =>
            param.setName('code')
                .setDescription('Provide code.')
                .setRequired(true)
        ),
    async execute(interaction) {
        await interaction.deferReply();
        const language = interaction.options.getString('language');
        const code = interaction.options.getString('code');
        let response = await executeCode(code, language)
        await interaction.followUp(
            buildEmbed(
                '',
                '',
                '',
                [
                    { name: 'Code:', value: `${code}` },
                    { name: 'Output:', value: `${response.run.output}` },
                ]
            )
        );
    },
};