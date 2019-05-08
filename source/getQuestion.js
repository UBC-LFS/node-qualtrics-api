import fetch from "./internal/fetch";
import getSurveyIds from "./getSurveyIds";

require("dotenv").config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves a question from a Survey
 * @param {String} name name of Survey
 * @param {String} questionID ID of question
 * @return {Promise} A promise that resolves to a list of Survey questions: https://api.qualtrics.com/reference#list-questions-1
 */

export default async function getQuestion(name, questionID) {
  const surveyId = await getSurveyIds(name);
  return fetch(
    qualtricsDomain +
      "survey-definitions/" +
      surveyId +
      "/questions/" +
      questionID
  );
}
