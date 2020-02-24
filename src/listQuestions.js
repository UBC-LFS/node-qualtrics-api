var fetchAll = require('./internal/fetchAll');

var getSurveyIds = require('./getSurveyIds');

require(`dotenv`).config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves all questions in Survey
 * @param {String} name name of Survey
 * @return {Promise} A promise that resolves to a list of Survey question objects: https://api.qualtrics.com/reference#list-questions-1
 */

module.exports = async function listQuestions(name) {
  const id = await getSurveyIds(name);
  return fetchAll(`${qualtricsDomain}survey-definitions/${id}/questions`);
};