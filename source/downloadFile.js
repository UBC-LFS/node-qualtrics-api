import fs from 'fs'

const downloadFile = (data, path) => {
  const pdfStream = fs.createWriteStream(path + 'download.zip')
  data.pipe(pdfStream)
}

export default downloadFile
