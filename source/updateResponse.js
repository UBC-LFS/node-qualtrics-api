import update from './internal/update'
import getSurveyIds from './getSurveyIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Updates a Response
 * @param {String} response the id of the response
 * @param {String} survey the name of the Survey
 * @param {Object} embeddedData JSON object representing the embedded data fields to set
 * @return {Promise} A promise that resolves to a Response update: https://api.qualtrics.com/reference#update-response
*/

export default async function updateResponse(survey, response, embeddedData) {
    const id = await (getSurveyIds(survey));
    const updateJSON = {
        'surveyId': id[0],
        'embeddedData': embeddedData
    }
    return update(`${qualtricsDomain}responses/${response}`, updateJSON);
}