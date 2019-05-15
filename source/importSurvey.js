import post from './internal/post'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Imports Survey
 * @param {String} survey the name of the Survey
 * @param {String} file file of survey to import
 * @return {Promise} A promise that resolves to import a survey file: https://api.qualtrics.com/reference#import-survey-3
*/

export default async function importSurvey(survey) {
    return post(`${qualtricsDomain}surveys`, survey);
}