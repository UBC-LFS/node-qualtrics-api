var fetch = require('./internal/fetch');

var getSurveyIds = require('./getSurveyIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves specific survey version object
 * @param {String} survey the name of the Survey
 * @param {String} version versionId
 * @return {Promise} A promise that resolves to a Survey object: https://api.qualtrics.com/docs/get-survey
*/

module.exports = async function getSurveyVersion(survey, version) {
  const id = await getSurveyIds(survey);
  return fetch(`${qualtricsDomain}survey-definitions/${id}/versions/${version}`);
};