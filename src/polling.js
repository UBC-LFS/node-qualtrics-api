var util = require('util');

var fetch = require('./internal/fetch');

var fs = require('fs');

const polling = promise => {
  return setInterval(function () {
    promise.then(({ percentComplete, file }) => {
      if (percentComplete === 100) {
        fetch(file).then(stream => util.promisify(fs.writeFile)('./output.zip', stream));
        clearInterval(polling);
      }
    }).catch(err => console.log(err));
  }, 1000);
};

module.exports = polling;