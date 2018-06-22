const { listSurveys, getSurvey, listMailingLists } = require('./src/index')

getSurvey().then(x => console.log(x))
