import create from './internal/createRequest'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Creqtes a Survey
 * @param {String} surveyName name of the Survey
 * @param {String} category catergory of the survey
 * @return {Promise} A promise that resolves to creating a survey: https://api.qualtrics.com/reference#create-survey
*/

export default function getSurvey(surveyName, category) {
    surveyInfo = {
        'SurveyName': surveyName,
        'Language': 'EN',
        'ProjectCategory': category
    }
    console.log(JSON.stringify(surveyInfo));
    return create(`${qualtricsDomain}survey-definitions`, JSON.stringify(surveyInfo))
}
