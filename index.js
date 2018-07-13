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

const responseID = getSurveyIds('test')
  .then(ids => ids[0])
  .then(id => getResponseExportId(id))

function responseProgress (id) {
  return id.then(({ id }) => getResponseExportProgress(id))
}
// const responseProgress = responseID
//   .then(({ id }) => getResponseExportProgress(id))

const getProgress = setInterval(function () { responseProgress(responseID) }, 50)

if (responseProgress.percentComplete === 100) {
  clearInterval(getProgress)
} else console.log(getProgress)

// //   .then(x => console.log(x))
//   // .then(url => fetch(url))
//   // .then(stream => promisify(fs.writeFile)('./output.zip', stream))

// // fetch('https://ubc.qualtrics.com/API/v3/responseexports/ES_86kaau3pgf5fn4uvsbd05r8nlg/file')
// //   .then(x => console.log(x))

fetch('https://ubc.qualtrics.com/API/v3/responseexports/ES_44qdqdlsedldjkulgmlhev8rdq/file')
  // .then(stream => console.log(stream))
  .then(stream => promisify(fs.writeFile)('./output.zip', stream))
