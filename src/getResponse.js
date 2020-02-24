var fetch = require('./internal/fetch');

var getSurveyIds = require('./getSurveyIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves a Response
 * @param {String} survey the name of the Survey
 * @param {String} response the id of the response
 * @return {Promise} A promise that resolves to a survey response: https://api.qualtrics.com/reference#getresponse
*/

module.exports = async function getResponse(survey, response) {
  const id = await getSurveyIds(survey);
  return fetch(`${qualtricsDomain}surveys/${id}/responses/${response}`);
};