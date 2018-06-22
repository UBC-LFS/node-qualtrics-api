import fetchAll from './internal/fetchAll'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves all mailing lists in an account
 * @return {Promise} A promise that resolves to a list of Mailing lists objects: https://api.qualtrics.com/docs/list-surveys
*/

export default function listMailingLists () {
  return fetchAll(qualtricsDomain + 'mailinglists')
}
