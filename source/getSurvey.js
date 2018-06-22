import fetch from './internal/fetch'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves information for one survey
 * @return {Promise} A promise that resolves to a Survey object: https://api.qualtrics.com/docs/get-survey
*/

export default function getSurvey () {
  return fetch(qualtricsDomain + 'surveys' + '/SV_etYkCAQmxrQ0ERv')
}
