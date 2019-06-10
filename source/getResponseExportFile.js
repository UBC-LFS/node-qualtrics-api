import fetch from './internal/fetch'
import getSurveyIds from './getSurveyIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retries the Response Export File
 * @param {String} survey the name of the Survey
 * @param {String} FileId Id recieved from getResponseExportProgress
 * @return {Promise} A promise that resolves to a Response Export file: https://api.qualtrics.com/reference#get-response-export-file-1
*/

export default async function getResponseExportFile(survey, fileId) {
    const id = await (getSurveyIds(survey));
    return fetch(`${qualtricsDomain}surveys/${id}/export-responses/${fileId}/file`)
}