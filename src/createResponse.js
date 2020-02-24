var create = require('./internal/createRequest');

var getSurveyIds = require('./getSurveyIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Creates a new Response
 * @param {String} survey the name of the Survey
 * @return {Promise} A promise that resolves to creating a new response: https://api.qualtrics.com/reference#createresponse-1
*/

module.exports = async function createResponse(survey) {
    const id = await getSurveyIds(survey);
    const info = {
        'values': {
            'newKey-1': 'New Value'
        }
    };
    return create(`${qualtricsDomain}surveys/${id}/responses`, info);
};