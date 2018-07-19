import fetch from './internal/fetch'
import getSurveyIds from './getSurveyIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves information about a survey's quota
 * @param {String} survey the name of the Survey
 * @return {Promise} A promise that resolves to a Survey object: https://api.qualtrics.com/docs/get-survey
*/

export default async function getSureyQuotas (survey) {
  const id = await (getSurveyIds(survey))
  return fetch(qualtricsDomain + 'surveys/' + id + '/quotas')
}
