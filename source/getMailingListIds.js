import listMailingLists from './listMailingLists'

/**
 * Get mailing list ID based on the name of mailing list
 * @param {String} name name of the mailing list
 * @return {String} the mailing list ID as string
 */

export default async function getMailingListIds (mailingListName) {
  const lists = await listMailingLists()
  if (lists.length === 0) {
    console.log('You have no mailing list.')
  } else {
    return lists
      .filter(({ name }) => name === mailingListName)
      .map(({ id }) => id)
  }
}
