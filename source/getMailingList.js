import fetch from './internal/fetch'
import getMailingListIds from './getMailingListIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves metadata for the specified mailing list
 * @param {String} name name of the mailing list
 * @return {Promise} A promise that resolves to a Mailing List object: https://api.qualtrics.com/docs/get-mailing-list
*/

export default async function getMailingList (name) {
  const id = await (getMailingListIds(name))
  return fetch(qualtricsDomain + 'mailinglists/' + id)
}
