import createResponseExport from './internal/createResponseExport'
import getSurveyId from './getSurveyId'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves information for one survey
 * @param {String} survey the name of the Survey
 * @return {Promise} A promise that resolves to a responseExport object: https://api.qualtrics.com/docs/get-survey
*/

export default async function getResponseExportId (survey) {
  const id = await (getSurveyId(survey))
  return createResponseExport(qualtricsDomain + 'responseexports', id)
}
