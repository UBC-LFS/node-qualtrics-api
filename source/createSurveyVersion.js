import create from './internal/createRequest'
import getSurveyIds from './getSurveyIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Creates a new Survey Version
 * @param {String} survey the name of the Survey
 * @param {String} description discription of Survey Version
 * @param {Boolean} published whether this Version is Published or not
 * @return {Promise} A promise that resolves to creating a survey version: https://api.qualtrics.com/reference#create-survey-version
*/

export default async function createSurveyVersion(survey, description, published) {
    const id = await (getSurveyIds(survey))
    const version = {
        'Description': description,
        'Published': published
    }
    return create(`${qualtricsDomain}survey-definitions/${id}/versions`, version)
}
