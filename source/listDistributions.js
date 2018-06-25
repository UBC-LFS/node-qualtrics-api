import fetchAll from './internal/fetchAll'
import getSurveyId from './getSurveyId'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves information for one survey
 * @return {Promise} A promise that resolves to a Survey object: https://api.qualtrics.com/docs/get-survey
*/

export default async function listDistribution (survey) {
  const id = await getSurveyId(survey)
  return fetchAll(qualtricsDomain + 'distributions?surveyId=' + id)
}
