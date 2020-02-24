var create = require('./internal/createRequest');

var getSurveyIds = require('./getSurveyIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Closes a Survey Session
 * @param {String} survey the name of the Survey
 * @param {String} session the id of the session
 * @return {Promise} A promise that resolves to closing a survey session: https://api.qualtrics.com/reference#close-session
*/

module.exports = async function closeSession(survey, session) {
    const id = await getSurveyIds(survey);
    const info = {
        'close': true
    };
    return create(`${qualtricsDomain}surveys/${id}/sessions/${session}`, info);
};