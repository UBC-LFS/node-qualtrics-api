import listSurveys from './listSurveys'

/**
 * Get survey ID based on the survey name
 * @param {String} name name of the survey
 * @return {String} the survey ID as string
 */

export default async function getSurveyId (name) {
  const surveys = listSurveys()
  if (surveys.length === 0) {
    return 'You hath no survey.'
  } else if (surveys.length === 1) {
    return surveys.map(survey => survey.id)[0]
  } else {
    return surveys.then(survey => survey.reduce((acc, cur) => {
      if (name === cur.name) {
        return cur.id
      }
      return acc.id
    }))
  }
}
