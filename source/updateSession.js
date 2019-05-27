import create from './internal/createRequest'
import getSurveyIds from './getSurveyIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Updates a survey session
 * @param {String} survey the name of the Survey
 * @param {String} session the id of the session
 * @param {Boolean} advance indicate whether to move to the next set of questions
 * @param {JSON} questions the question that will be updated
 * @return {Promise} A promise that resolves to updating a survey session: https://api.qualtrics.com/reference#update-session
*/

export default async function createSession(survey, session, advance, questions) {
    const id = await (getSurveyIds(survey))
    const info = {
        'advance': advance,
        'responses': questions
    }
    return create(`${qualtricsDomain}surveys/${id}/sessions/${session}`, info)
}
