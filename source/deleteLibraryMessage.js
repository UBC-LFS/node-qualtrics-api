import deleteRequest from './internal/deleteRequest'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Deletes a Library Message
 * @param {String} library libraryId
 * @param {String} message messageId
 * @return {Promise} A promise that resolves to deleting a Library Message: https://api.qualtrics.com/reference#delete-library-message
*/

export default function deleteLibraryMessage(library, message) {
    return deleteRequest(`${qualtricsDomain}libraries/${library}/messages/${message}`);
}