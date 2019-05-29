import fetch from './internal/fetch'
import getMailingListIds from './getMailingListIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Retrieves information for an individual contact
 * @param {String} mailinglist name of mailing list
 * @param {String} contact contactId
 * @return {Promise} A promise that resolves to a contact object: https://api.qualtrics.com/reference#get-contact
*/

export default async function getContact(mailinglist, contact) {
    const id = await (getMailingListIds(mailinglist))
    return fetch(`${qualtricsDomain}mailinglists/${id}/contacts/${contact}`)
}