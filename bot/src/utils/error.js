const { buildEmbed } = require('./embed');

const sendErrorMessage = async (interaction, error) => {
    await interaction.followUp(
        buildEmbed(
            'Error!',
            'There was an error processing your command.',
            '',
            [{ name: 'Error', value: error }],
            0xff0000
        )
    );
};

module.exports = { sendErrorMessage };
