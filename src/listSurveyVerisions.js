var fetchAll = require('./internal/fetchAll');

var getSurveyIds = require('./getSurveyIds');

require(`dotenv`).config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves all versions in a Survey
 * @param {String} name name of Survey
 * @return {Promise} A promise that resolves to a list of Survey Version objects: https://api.qualtrics.com/reference#list-survey-versions-1
*/

module.exports = async function listSurveyVersions(name) {
  const id = await getSurveyIds(name);
  console.log(`${qualtricsDomain}survey-definitions/${id}/versions`);
  return fetchAll(`${qualtricsDomain}survey-definitions/${id}/versions`);
};