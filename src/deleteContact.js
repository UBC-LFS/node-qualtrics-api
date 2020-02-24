var deleteRequest = require('./internal/deleteRequest');

var getMailingListIds = require('./getMailingListIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Deletes a Contact
 * @param {String} mailinglist name of mailinglist
 * @param {String} contact contact id
 * @return {Promise} A promise that resolves to deleting a Contact: https://api.qualtrics.com/reference#delete-contact
*/

module.exports = async function deleteContact(mailingList, contact) {
  const id = await getMailingListIds(mailingList);
  return deleteRequest(`${qualtricsDomain}mailinglists/${id}/contacts/${contact}`);
};