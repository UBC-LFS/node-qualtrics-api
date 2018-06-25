const { listSurveys, getSurvey, listMailingLists, getSurveyId } = require('./src/index')

getSurvey(getSurveyId('Test#2', listSurveys())).then(x => console.log(x))
