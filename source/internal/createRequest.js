import request from 'request-promise'
import Bottleneck from 'bottleneck'

require('dotenv').config()

const token = process.env.QUALTRICS_API_TOKEN

const limiter = new Bottleneck({
    maxConcurrent: 20,
    minTime: 100
})

const requestObj = (url, info) => ({
    'method': 'POST',
    'uri': url,
    'encoding': null,
    'json': true,
    'headers': {
        'x-api-token': token,
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    'body': info
})

const create = (url, info) => request(requestObj(url, info))

const createRateLimited = limiter.wrap(create)

export default createRateLimited