var fetch = require('./internal/fetch');

var getUserId = require('./getUserId');

require('dotenv').config();

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN;

/**
 * Retrieves information about a user
 * Must be a Qualtrics brand administrator to use this call
 * @param {String} user the name of the User
 * @return {Promise} A promise that resolves to a User object: https://api.qualtrics.com/docs/get-user
*/

module.exports = async function getUser(user) {
  const id = await getUserId(user);
  return fetch(qualtricsDomain + 'users/' + id);
};