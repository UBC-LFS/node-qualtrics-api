var createResponseExport = require('./internal/createResponseExport');

var getSurveyIds = require('./getSurveyIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves information for one survey
 * @param {String} surveyId the id of the Survey
 * @return {Promise} A promise that resolves to a responseExport object: https://api.qualtrics.com/docs/get-survey
*/

function getResponseExportId(surveyId) {
  return createResponseExport(qualtricsDomain + 'responseexports', surveyId);
}
module.exports = getResponseExportId;