import fetchAll from './internal/fetchAll'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves all messages in a library
 * @param {String} library id of libarary
 * @return {Promise} A promise that resolves to a list of messages in a library: https://api.qualtrics.com/reference#get-library-messages
*/

export default function listLibraryMessages(library) {
    return fetchAll(`${qualtricsDomain}libraries/${library}/messages`)
}