import deleteRequest from './internal/deleteRequest'
import getSurveyIds from './getSurveyIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Deletes Survey
 * @param {String} survey the name of the Survey
 * @return {Promise} A promise that resolves to deleting a survey: https://api.qualtrics.com/reference#delete-survey
*/

export default async function deleteSurvey(survey) {
    const id = await (getSurveyIds(survey));
    return deleteRequest(`${qualtricsDomain}surveys/${id}`);
}
