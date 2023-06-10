const { SlashCommandBuilder } = require('discord.js');
const { buildEmbed } = require('../../utils/embed');
const { executeCode } = require('../../../api/submit.js');
const { sendErrorMessage } = require('../../utils/error');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('run')
        .setDescription('Run a snippet of code and return the output')
        .addStringOption((param) =>
            param
                .setName('language')
                .setDescription('language of the code to execute.')
                .setRequired(true)
                .addChoices(
                    { name: 'javascript', value: 'javascript' },
                    { name: 'python', value: 'python' }
                )
        )
        .addStringOption((param) =>
            param.setName('code').setDescription('code to execute').setRequired(true)
        ),
    async execute(interaction) {
        await interaction.deferReply();
        const language = interaction.options.getString('language');
        const code = interaction.options.getString('code');
        try {
            let response = await executeCode(code, language);
            await interaction.followUp(
                buildEmbed(
                    'Run',
                    '@User, here is the output of your code',
                    '',
                    [
                        { name: 'Code:', value: `${code}` },
                        { name: 'Output:', value: `${response.run.output}` },
                    ],
                    0x0000ff
                )
            );
        } catch (err) {
            console.error('leithen' + err);
            await sendErrorMessage(interaction, err);
        }
    },
};
