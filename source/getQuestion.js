import fetch from "./internal/fetch";
import getSurveyIds from "./getSurveyIds";

require("dotenv").config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves a question from a Survey
 * @param {String} name name of Survey
 * @param {String} questionID ID of question
 * @return {Promise} A promise that resolves to a Survey question object: https://api.qualtrics.com/reference#get-question
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
