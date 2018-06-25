import listSurveys from './listSurveys'

/**
 * Get survey ID based on the survey name
 * @param {String} name name of the survey
 * @return {String} the survey ID as string
 */

export default async function getSurveyId (name) {
  return listSurveys().then(surveys => surveys.reduce((acc, cur) => {
    if (name === cur.name) {
      acc = cur.id
    }
    return acc
  }))
}
