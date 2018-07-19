import fetchAll from './internal/fetchAll'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves all users in the collection
 * @return {Promise} A promise that resolves to a list of Users objects: https://api.qualtrics.com/docs/list-users
 */

export default function listUsers () {
  return fetchAll(qualtricsDomain + 'users')
}
