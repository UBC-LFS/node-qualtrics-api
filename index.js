const {
  listSurveys,
  getSurvey,
  listMailingLists,
  getSurveyIds,
  listDistribution,
  getDistribution,
  getResponseExportId,
  getResponseExportProgress,
  downloadFile
} = require('./src/index')

const fs = require('fs')
const { promisify } = require('util')
const fetch = require('./src/internal/fetch')

getSurveyIds('LFS LC Loans 2018')
  .then(ids => ids[0])
  .then(id => getResponseExportId(id))
  .then(({ id }) => getResponseExportProgress(id))
  .then(progress => console.log(progress))
//   .then(x => console.log(x))
  // .then(url => fetch(url))
  // .then(stream => promisify(fs.writeFile)('./output.zip', stream))

// fetch('https://ubc.qualtrics.com/API/v3/responseexports/ES_86kaau3pgf5fn4uvsbd05r8nlg/file')
//   .then(x => console.log(x))

fetch('https://ubc.qualtrics.com/API/v3/responseexports/ES_44qdqdlsedldjkulgmlhev8rdq/file')
  .then(stream => promisify(fs.writeFile)('./output.zip', stream))
