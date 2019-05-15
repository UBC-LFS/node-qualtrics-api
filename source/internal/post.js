import request from 'request-promise'
import Bottleneck from 'bottleneck'

require('dotenv').config()
var fs = require('fs');

const token = process.env.QUALTRICS_API_TOKEN

const limiter = new Bottleneck({
    maxConcurrent: 20,
    minTime: 100
})

const requestObj = (url, file) => ({
    'method': 'POST',
    'uri': url,
    'encoding': null,
    'json': true,
    'headers': {
        'x-api-token': token,
        'content-type': 'multiport/form-data',
        'name': 'Austin\'s Imported Survey'
    },
    'formData': {
        'name': 'Austin\'s Imported Survey',
        'file': ('Austin_Imported_Survey.qsf', fs.readFileSync(file), 'application/vnd.qualtrics.survey.qsf'),
    }
})
const post = (url, file) => request.post(requestObj(url, file));

const postRateLimited = limiter.wrap(post)

export default postRateLimited