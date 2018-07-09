const { listSurveys, getSurvey, listMailingLists, getSurveyIds, listDistribution, getDistribution, getResponseExportId, getResponseExportProgress } = require('./src/index')

const fetch = require('./src/internal/fetch')

// getSurveyIds('test')
//   .then(ids => ids[0])
//   .then(id => getResponseExportId(id))
//   .then(({ id }) => getResponseExportProgress(id))
//   .then(x => console.log(x))

fetch('https://ubc.qualtrics.com/API/v3/responseexports/ES_86kaau3pgf5fn4uvsbd05r8nlg/file')
  .then(x => console.log(x))