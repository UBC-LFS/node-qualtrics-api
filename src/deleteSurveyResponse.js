var deleteRequest = require('./internal/deleteRequest');

var getSurveyIds = require('./getSurveyIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Deletes a Single Survey Response
 * @param {String} survey the name of the Survey
 * @param {String} response the id of the response
 * @param {Boolean} decrementQuotas will any relevant quotas be decremented
 * @return {Promise} A promise that resolves to deleting a single survey response: https://api.qualtrics.com/reference#deleteresponse
*/

module.exports = async function deleteSurveyResponse(survey, response, decrementQuotas) {
  const id = await getSurveyIds(survey);
  return deleteRequest(`${qualtricsDomain}surveys/${id}/responses/${response}?decrementQuotas=${decrementQuotas.toString()}`);
};