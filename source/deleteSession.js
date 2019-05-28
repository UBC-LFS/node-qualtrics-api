import deleteRequest from './internal/deleteRequest'
import getSurveyIds from './getSurveyIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Deletes a Survey Session
 * @param {String} survey the name of the Survey
 * @param {String} session id of session
 * @return {Promise} A promise that resolves to deleting a survey session: https://api.qualtrics.com/reference#delete-session
*/

export default async function deleteSession(survey, session) {
    const id = await (getSurveyIds(survey))
    return deleteRequest(`${qualtricsDomain}surveys/${id}/sessions/${session}`)
}