var update = require('./internal/update');

var getMailingListIds = require('./getMailingListIds');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Updates a Contact
 * @param {String} mailingList name of mailinglist
 * @param {String} contact Contact id
 * @param {String} newFirstName New first name
 * @param {String} newLastName New last name
 * @param {String} newEmail New email
 * @param {Boolean} unsubscribed Opt-out the contact from the mailinglist
 * @return {Promise} A promise that resolves to a contact update: https://api.qualtrics.com/reference#update-contact
*/

module.exports = async function updateContact(mailingList, contact, newFirstName, newLastName, newEmail, unsubscribed) {
    const id = await getMailingListIds(mailingList);
    const updateContact = {
        'firstName': newFirstName,
        'lastName': newLastName,
        'email': newEmail,
        'unsubscribed': unsubscribed
    };
    return update(`${qualtricsDomain}mailinglists/${id}/contacts/${contact}`, updateContact);
};