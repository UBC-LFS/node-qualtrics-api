const {
  listSurveys,
  getSurvey,
  listMailingLists,
  getSurveyIds,
  listDistribution,
  getDistribution,
  getResponseExportId,
  getResponseExportProgress,
  downloadFile,
  polling,
  listUsers,
  getUserId,
  getUser,
  getSurveyQuotas,
  getMailingListIds,
  getMailingList,
  listQuestions,
  getQuestion,
  getOptions,
  getSurveyMetadata,
  listSurveyVersion,
  getSurveyVersion,
  listLibraryMessages,
  getLibraryMessage,
  listContacts
} = require(`./src/index`);

const fs = require(`fs`);
const { promisify } = require(`util`);
const fetch = require(`./src/internal/fetch`);

// const responseProgress = getSurveyIds("food")
//   .then(ids => ids[0])
//   .then(id => getResponseExportId(id))
//   .then(({ id }) => getResponseExportProgress(id));

//getMailingList("Another").then(x => console.log(x));
listContacts(`Another`).then(x => console.log(x));
// const updateProgress = polling(responseProgress)
// const updateProgress = setInterval(function () {
//   responseProgress
//     .then(({ percentComplete, file }) => {
//       if (percentComplete === 100) {
//         fetch(file)
//           .then(stream => promisify(fs.writeFile)('./output.zip', stream))
//         clearInterval(updateProgress)
//       }
//     })
//     .catch(err => console.log(err))
// }, 1000)

//   .then(x => console.log(x))
//   .then(url => fetch(url))
//   .then(stream => promisify(fs.writeFile)('./output.zip', stream))

// fetch('https://ubc.qualtrics.com/API/v3/responseexports/ES_vv4o2g42oebua2m2e3bta68cee/file')
//   // .then(stream => console.log(stream))
//   .then(stream => promisify(fs.writeFile)('./output.zip', stream))
