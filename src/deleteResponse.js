var deleteRequest = require('./internal/deleteRequest');

var getSurveyIds = require('./getSurveyIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Deletes a Response
 * @param {String} survey the name of the Survey
 * @param {String} response the id of the response
 * @param {Boolean} decrementQuotas will any relevant quotas be decremented
 * @return {Promise} A promise that resolves to deleting a response: https://api.qualtrics.com/reference#delete-response
*/

module.exports = async function deleteResponse(survey, response, decrementQuotas) {
  const id = await getSurveyIds(survey);
  return deleteRequest(`${qualtricsDomain}responses/${response}?surveyId=${id}&decrementQuotas=${decrementQuotas.toString()}`);
};