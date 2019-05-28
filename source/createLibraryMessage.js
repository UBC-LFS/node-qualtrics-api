import create from './internal/createRequest'
import getSurveyIds from './getSurveyIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Creates a new Library Message
 * @param {String} library id of library
 * @param {String} category the category of the message
 * @param {String} description discription of message
 * @param {String} message to be sent
 * @return {Promise} A promise that resolves to creating a library message: https://api.qualtrics.com/reference#create-library-message
*/

export default function createLibraryMessage(library, category, description, message) {
    const newMessage = {
        'category': category,
        'messages': { 'en': message },
        'description': description
    }
    return create(`${qualtricsDomain}libraries/${library}/messages`, newMessage)
}
