var fs = require('fs');

const downloadFile = (data, path) => {
  const pdfStream = fs.createWriteStream(path + 'download.zip');
  data.pipe(pdfStream);
};

module.exports = downloadFile;