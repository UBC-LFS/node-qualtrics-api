var fetchAll = require('./internal/fetchAll');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves all surveys in an account
 * @return {Promise} A promise that resolves to a list of Survey objects: https://api.qualtrics.com/docs/list-surveys
*/

function listSurveys() {
  return fetchAll(qualtricsDomain + 'surveys');
}
module.exports = listSurveys;