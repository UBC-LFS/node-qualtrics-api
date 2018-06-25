const { listSurveys, getSurvey, listMailingLists, getSurveyId, listDistribution, getDistribution } = require('./src/index')

getDistribution('Test#2', 'EMD_3fOdA3v2QGcQJh3').then(x => console.log(x))
