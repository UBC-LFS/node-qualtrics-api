const { listSurveys, getSurvey, listMailingLists, getSurveyId, listDistribution, getDistribution, getResponseExportId} = require('./src/index')

getSurveyId('Test#2').then(x => console.log(x))
