import createResponseExport from './internal/createResponseExport'
import getSurveyIds from './getSurveyIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves information for one survey
 * @param {String} surveyId the id of the Survey
 * @return {Promise} A promise that resolves to a responseExport object: https://api.qualtrics.com/docs/get-survey
*/

export default function getResponseExportId (surveyId) {
  return createResponseExport(qualtricsDomain + 'responseexports', surveyId)
}
