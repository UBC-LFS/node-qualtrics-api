var fetch = require('./internal/fetch');

var getSurveyIds = require('./getSurveyIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves information for one survey
 * @param {String} survey the name of the Survey
 * @return {Promise} A promise that resolves to a Survey object: https://api.qualtrics.com/docs/get-survey
*/

module.exports = async function getSurvey(survey) {
  const id = await getSurveyIds(survey);
  return fetch(qualtricsDomain + 'surveys/' + id);
};