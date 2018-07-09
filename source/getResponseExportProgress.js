import fetch from './internal/fetch'

require('dotenv').config()

const qualtricsDomain = process.env.QUALTRICS_API_DOMAIN

export default async function getResponseExportProgress (exportId) {
  const response = await fetch(qualtricsDomain + 'responseexports/' + exportId)
  return response.result
}
