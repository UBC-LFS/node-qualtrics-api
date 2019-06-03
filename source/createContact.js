import create from './internal/createRequest'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Creates a new Contact
 * @param {String} mailingList Mailing List id
 * @param {String} firstName Contact's first name
 * @param {String} lastName Contact's last name
 * @param {String} email Contact's email
 * @param {Boolean} unsubscribed Contact's opt-out state
 * @return {Promise} A promise that resolves to creating a contact: https://api.qualtrics.com/reference#create-recipient-contact
*/

export default function createContact(mailingList, firstName, lastName, email, unsubscribed) {
    const contact = {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'language': 'en',
        'unsubscribed': unsubscribed
    }
    return create(`${qualtricsDomain}mailinglists/${mailingList}/contacts`, contact)
}