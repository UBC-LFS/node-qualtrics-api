import fetch from './internal/fetch'
import getSurveyId from './getSurveyId'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves distribution information for one survey
 * @param {String} survey the name of the survey
 * @param {String} distributionsId the distribution ID of choice (can look up distribution ID using listDistributions)
 * @return {Promise} A promise that resolves to a Survey object: https://api.qualtrics.com/docs/get-survey
*/

export default async function getDistrubions (survey, distributionsId) {
  const id = await (getSurveyId(survey))
  return fetch(qualtricsDomain + 'distributions/' + distributionsId + '?surveyId=' + id)
}
