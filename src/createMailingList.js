var create = require('./internal/createRequest');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Creates a new Mailing List
 * @param {String} library id of library
 * @param {String} category the category of new mailing list
 * @param {String} name name of new mailing list
 * @return {Promise} A promise that resolves to creating a mailing list: https://api.qualtrics.com/reference#create-mailing-lists
*/

function createMailingList(library, category, name) {
    const newMailingList = {
        'category': category,
        'libraryId': library,
        'name': name
    };
    return create(`${qualtricsDomain}mailinglists`, newMailingList);
}
module.exports = createMailingList;