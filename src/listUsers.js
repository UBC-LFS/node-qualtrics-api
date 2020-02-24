var fetchAll = require('./internal/fetchAll');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves all users in the collection
 * Must be a Qualtrics brand administrator to use this call
 * @return {Promise} A promise that resolves to a list of Users objects: https://api.qualtrics.com/docs/list-users
 */

function listUsers() {
  return fetchAll(qualtricsDomain + 'users');
}
module.exports = listUsers;