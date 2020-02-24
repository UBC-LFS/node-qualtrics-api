var fetchAll = require('./internal/fetchAll');

var getSurveyIds = require('./getSurveyIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves information for one survey
 * @param {String} survey name of the Survey
 * @return {Promise} A promise that resolves to a Survey object: https://api.qualtrics.com/docs/get-survey
*/

module.exports = async function listDistribution(survey) {
  const id = await getSurveyIds(survey);
  return fetchAll(qualtricsDomain + 'distributions?surveyId=' + id);
};