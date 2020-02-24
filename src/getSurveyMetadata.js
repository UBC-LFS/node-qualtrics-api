var fetch = require('./internal/fetch');

var getSurveyIds = require('./getSurveyIds');

require(`dotenv`).config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves Survey Metadata
 * @param {String} name name of Survey
 * @return {Promise} A promise that resolves to Survey Metadata object: https://api.qualtrics.com/reference#get-survey-metadata
 */

module.exports = async function getSurveyMetadata(name) {
  const surveyId = await getSurveyIds(name);
  return fetch(`${qualtricsDomain}survey-definitions/${surveyId}/metadata`);
};