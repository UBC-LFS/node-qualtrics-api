import listSurveys from './listSurveys'

/**
 * Get survey ID based on the survey name
 * @param {String} name name of the survey
 * @param {Promise} surveys list of surveys
 * @return {String} the survey ID as string
 */

export default function getSurveyId (name, surveys) {
  surveys.then(surveys => surveys.reduce((acc, cur) => {
    if (name === cur.name) {
      acc = cur.id
    }
    return acc
  }))
}
