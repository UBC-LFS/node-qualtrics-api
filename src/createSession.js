var create = require('./internal/createRequest');

var getSurveyIds = require('./getSurveyIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Creates a new Survey Session
 * @param {String} survey the name of the Survey
 * @return {Promise} A promise that resolves to creating a survey session: https://api.qualtrics.com/reference#create-session
*/

module.exports = async function createSession(survey) {
    const id = await getSurveyIds(survey);
    const info = {
        'language': 'EN'
    };
    return create(`${qualtricsDomain}surveys/${id}/sessions`, info);
};