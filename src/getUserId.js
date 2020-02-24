var listUsers = require('./listUsers');

/**
 * Get user ID based on the username
 * Must be a Qualtrics brand administrator to use this call
 * @param {String} name name of the user
 * @return {String} the user ID as string
 */

module.exports = async function getUserId(name) {
  const users = await listUsers();
  if (users.length === 0) {
    console.log('There are no users.');
  } else {
    return users.filter(({ username }) => username === name).map(({ id }) => id);
  }
};