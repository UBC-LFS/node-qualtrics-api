import fetch from './internal/fetch'
import getUserId from './getUserId'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves information about a user
 * @param {String} user the name of the User
 * @return {Promise} A promise that resolves to a User object: https://api.qualtrics.com/docs/get-user
*/

export default async function getUser (user) {
  const id = await (getUserId(user))
  return fetch(qualtricsDomain + 'users/' + id)
}
