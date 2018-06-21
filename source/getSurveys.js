import fetch from './internal/fetch'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves all surveys in a course
 * @param {Number} deptId the dept id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a Course object: https://canvas.instructure.com/doc/api/courses.html#Course
*/

export default function getSurveys () {
  return fetch(qualtricsDomain + 'surveys')
}
