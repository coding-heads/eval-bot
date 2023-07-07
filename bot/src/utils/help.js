const { buildThumbnailEmbed } = require('./embed');

const sendHelpMessage = async (interaction) => {
    await interaction.followUp(
        buildThumbnailEmbed(
            'Help',
            'Here is a list of commands that eval-bot can run:',
            'about.png',
            [
                { name: 'Run', value: 'Runs a snippet of code and returns the output' },
                {
                    name: 'Submit',
                    // eslint-disable-next-line prettier/prettier
                    value: 'Runs a snippet of code against a provided problem and returns \'correct\' or \'incorrect\'',
                },
                { name: 'Create', value: 'Create a new problem for users to solve' },
            ],
            '54aaeb'
        )
    );
};

module.exports = { sendHelpMessage };
