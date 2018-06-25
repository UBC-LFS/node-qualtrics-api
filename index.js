const { listSurveys, getSurvey, listMailingLists, getSurveyId, listDistribution, getDistribution, getResponseExport } = require('./src/index')

getResponseExport('Test#2').then(x => console.log(x))
