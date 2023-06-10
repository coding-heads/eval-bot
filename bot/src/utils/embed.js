const { EmbedBuilder } = require('discord.js');

const buildEmbed = (title, description, image, thumbnail, fieldsArr, color) => {
    // Using the AttachmentBuilder class, pass in paramters to object
    // const imageFile = new AttachmentBuilder(image);
    // const thumbnailFile = new AttachmentBuilder(thumbnail);
    const embed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description)
        .setColor(color)
        .addFields(fieldsArr);
    // set images and thumbnails with this path
    // .setImage(`attachment://${image.match(/[a-zA-Z._-]*$/)[0]}`)
    // .setThumbnail(`attachment://${thumbnail.match(/[a-zA-Z._-]*$/)[0]}`)
    return { embeds: [embed] };

    // If/when images/thumbnails are provided, include the files property with the value of [imageFile, thumbnailFile]
    // files: [imageFile, thumbnailFile]
};

module.exports = {
    buildEmbed,
};
