var fetch = require('./internal/fetch');

var getSurveyIds = require('./getSurveyIds');

require(`dotenv`).config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves Survey Options
 * @param {String} name name of Survey
 * @return {Promise} A promise that resolves to Survey Options: https://api.qualtrics.com/reference#get-options
 */

module.exports = async function getOptions(name) {
  const surveyId = await getSurveyIds(name);
  return fetch(`${qualtricsDomain}survey-definitions/${surveyId}/options`);
};