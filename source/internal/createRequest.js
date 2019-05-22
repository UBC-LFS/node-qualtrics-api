import request from 'request-promise'
import Bottleneck from 'bottleneck'

require('dotenv').config()

const token = process.env.QUALTRICS_API_TOKEN

const limiter = new Bottleneck({
    maxConcurrent: 20,
    minTime: 100
})

const requestObj = (url, survey) => ({
    'method': 'POST',
    'uri': url,
    'encoding': null,
    'json': true,
    'headers': {
        'x-api-token': token,
        'content-type': 'applicatin/json'
    },
    'body': survey
})

const create = (url, survey) => request(requestObj(url, survey))

const createRateLimited = limiter.wrap(create)

export default createRateLimited