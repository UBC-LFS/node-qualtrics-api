import create from './internal/create'
import getSurveyIds from './getSurveyIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * creates a Survey Question
 * @param {String} survey the name of the Survey
 * @param {String} question string version of survey question object
 * @return {Promise} A promise that resolves to adding a survey question: https://api.qualtrics.com/reference#create-question
*/

export default async function deleteSurvey(survey, question) {
    const id = await (getSurveyIds(survey));
    return create(`${qualtricsDomain}survey-definitions/${id}/questions`, question);
}
