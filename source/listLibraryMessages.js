import fetchAll from './internal/fetchAll'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves all messages in a library
 * @param {String} library id of libarary
 * @return {Promise} A promise that resolves to a list of Mailing lists objects: https://api.qualtrics.com/docs/list-surveys
*/

export default function listLibraryMessages(library) {
    return fetchAll(`${qualtricsDomain}libraries/${library}/messages`)
}