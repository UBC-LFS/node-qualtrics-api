import fetchAll from './internal/fetchAll';
import getSurveyIds from './getSurveyIds';

require(`dotenv`).config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves all questions in Survey
 * @param {String} name name of Survey
 * @return {Promise} A promise that resolves to a list of Survey question objects: https://api.qualtrics.com/reference#list-questions-1
 */

export default async function listQuestions(name) {
  const id = await getSurveyIds(name);
  return fetchAll(`${qualtricsDomain}survey-definitions/${id}/questions`);
}
