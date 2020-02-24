var fetch = require('./internal/fetch');

var getSurveyIds = require('./getSurveyIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves information for one survey session
 * @param {String} survey the name of the Survey
 * @param {String} session the sessionId
 * @return {Promise} A promise that resolves to a Survey Session object: https://api.qualtrics.com/reference#update-session
*/

module.exports = async function getSession(survey, session) {
  const id = await getSurveyIds(survey);
  return fetch(`${qualtricsDomain}surveys/${id}/sessions/${session}`);
};