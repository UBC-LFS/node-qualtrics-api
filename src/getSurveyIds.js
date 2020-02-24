var listSurveys = require('./listSurveys');

/**
 * Get survey ID based on the survey name
 * @param {String} name name of the survey
 * @return {String} the survey ID as string
 */

module.exports = async function getSurveyIds(surveyName) {
  const surveys = await listSurveys();
  if (surveys.length === 0) {
    console.log('You have no survey.');
  } else {
    return surveys.filter(({ name }) => name === surveyName).map(({ id }) => id);
  }
};