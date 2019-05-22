import request from 'request-promise'
import Bottleneck from 'bottleneck'

require('dotenv').config()

const token = process.env.QUALTRICS_API_TOKEN

const limiter = new Bottleneck({
    maxConcurrent: 20,
    minTime: 100
})

const requestObj = (url, question) => ({
    'method': 'POST',
    'uri': url,
    'encoding': null,
    'json': true,
    'headers': {
        'x-api-token': token,
        'content-type': 'application/json'
    },
    'body': question
})

const create = (url, question) => request(requestObj(url, question))

const createRateLimited = limiter.wrap(create)

export default createRateLimited
