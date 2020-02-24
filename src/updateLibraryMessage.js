var update = require('./internal/update');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Updates a Library Message
 * @param {String} library the libraryId
 * @param {String} messageId id of message
 * @param {String} newDescription the updated description
 * @param {String} newMessage the updated message
 * @return {Promise} A promise that resolves to a Response update: https://api.qualtrics.com/reference#update-response
*/

function updateLibraryMessage(library, messageId, newDescription, newMessage) {
    const updateMessage = {
        'messages': { 'en': newMessage },
        'description': newDescription
    };
    return update(`${qualtricsDomain}libraries/${library}/messages/${messageId}`, updateMessage);
}
module.exports = updateLibraryMessage;