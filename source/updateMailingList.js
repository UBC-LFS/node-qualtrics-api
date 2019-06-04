import update from './internal/update'
import getMailingListIds from './getMailingListIds'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

/**
 * Updates a Mailing List
 * @param {String} mailinglist name of mailing list
 * @param {String} library the libraryId
 * @param {String} newCategory the updated category
 * @param {String} newName the updated name
 * @return {Promise} A promise that resolves to a Mailing List update: https://api.qualtrics.com/reference#update-mailing-list
*/

export default async function updateMailingList(mailingList, library, newCategory, newName) {
    const id = await getMailingListIds(mailingList);
    const updateInfo = {
        'libraryId': library,
        'category': newCategory,
        'name': newName
    }
    return update(`${qualtricsDomain}mailinglists/${id}`, updateInfo);
}