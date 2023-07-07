import { buildThumbnailEmbed } from './embed';

const sendErrorMessage = async (interaction, error) => {
    await interaction.followUp(
        buildThumbnailEmbed(
            'Error!',
            'There was an error processing your command.',
            'error.png',
            [{ name: 'Error', value: `${error}` }],
            'ff0000'
        )
    );
};

export { sendErrorMessage };
