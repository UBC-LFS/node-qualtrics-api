import fetchAll from './internal/fetchAll'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves all surveys in an account
 * @return {Promise} A promise that resolves to a Survey object
*/

export default function getSurveys () {
  return fetchAll(qualtricsDomain + 'surveys')
}
