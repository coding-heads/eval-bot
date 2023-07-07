import { SlashCommandBuilder } from 'discord.js';
import { buildEmbed } from '../../utils/embed';
import { executeCode } from '../../../api/submit.js';
import { sendErrorMessage } from '../../utils/error';

export const data = new SlashCommandBuilder()
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
    );
export async function execute(interaction) {
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
                '',
                [
                    { name: 'Code:', value: `${code}` },
                    { name: 'Output:', value: `${response.run.output}` },
                ],
                '7289da'
            )
        );
    } catch (err) {
        console.error(err);
        await sendErrorMessage(interaction, err);
    }
}
