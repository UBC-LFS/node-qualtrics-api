const { listSurveys, getSurvey, listMailingLists, getSurveyId, listDistribution } = require('./src/index')

listDistribution('Test#2').then(x => console.log(x))
