var fetchAll = require('./internal/fetchAll');

var getMailingListIds = require('./getMailingListIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves all members of the mailing list
 * @param {String} name name of mailing list
 * @return {Promise} A promise that resolves to a list of contact objects: https://api.qualtrics.com/reference#list-contacts
*/

module.exports = async function listContacts(name) {
  const id = await getMailingListIds(name);
  return fetchAll(`${qualtricsDomain}mailinglists/${id}/contacts`);
};