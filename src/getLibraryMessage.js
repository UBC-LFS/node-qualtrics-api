var fetch = require('./internal/fetch');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves message from Library
 * @param {String} library libraryId
 * @param {String} message messageId
 * @return {Promise} A promise that resolves to a message object: https://api.qualtrics.com/reference#get-library-message
*/

function getLibraryMessage(library, message) {
  return fetch(`${qualtricsDomain}libraries/${library}/messages/${message}`);
}
module.exports = getLibraryMessage;