var create = require('./internal/createRequest');

var getSurveyIds = require('./getSurveyIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Creates a new Response Export
 * @param {String} survey the name of the Survey
 * @param {String} format the file format
 * @return {Promise} A promise that resolves to creating a new response export: https://api.qualtrics.com/reference#create-response-export-new
*/

module.exports = async function createResponseExport(survey, format) {
    const id = await getSurveyIds(survey);
    const info = {
        'format': format
    };
    return create(`${qualtricsDomain}surveys/${id}/export-responses`, info);
};