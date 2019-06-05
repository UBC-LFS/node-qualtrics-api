import fetch from './internal/fetch'
import getSurveyIds from './getSurveyIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retries a Progress report on a Response Export
 * @param {String} survey the name of the Survey
 * @param {String} exportProgressId Export progress ID returned by the export creation call
 * @return {Promise} A promise that resolves to a Response Export progress report: https://api.qualtrics.com/reference#get-response-export-progress-1
*/

export default async function getResponseExportProgress(survey, exportId) {
  const id = await (getSurveyIds(survey));
  return fetch(`${qualtricsDomain}surveys/${id}/export-responses/${exportId}`)
}
