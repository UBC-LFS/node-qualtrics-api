import deleteRequest from './internal/deleteRequest'
import getMailingListIds from './getMailingListIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Deletes a Mailing List
 * @param {String} mailingList name of mailing list
 * @return {Promise} A promise that resolves to deleting a Mailing List: https://api.qualtrics.com/reference#delete-mailing-list
*/

export default async function deleteMailingList(mailingList) {
    const id = await getMailingListIds(mailingList);
    return deleteRequest(`${qualtricsDomain}mailinglists/${id}`);
}