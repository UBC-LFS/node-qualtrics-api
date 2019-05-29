import deleteRequest from './internal/deleteRequest'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Deletes a Mailing List
 * @param {String} mailingList mailingList id
 * @return {Promise} A promise that resolves to deleting a Mailing List: https://api.qualtrics.com/reference#delete-mailing-list
*/

export default function deleteMailingList(mailingList) {
    return deleteRequest(`${qualtricsDomain}mailinglists/${mailingList}`);
}