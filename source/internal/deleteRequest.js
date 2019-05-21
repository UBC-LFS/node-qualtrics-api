import request from 'request-promise'
import Bottleneck from 'bottleneck'

require('dotenv').config()

const token = process.env.QUALTRICS_API_TOKEN

const limiter = new Bottleneck({
    maxConcurrent: 20,
    minTime: 100
})

const requestObj = url => ({
    'method': 'DELETE',
    'uri': url,
    'encoding': null,
    'json': true,
    'headers': {
        'x-api-token': token
    }
})

const deleteRequest = url => request(requestObj(url))

const deleteRateLimited = limiter.wrap(deleteRequest)

export default deleteRateLimited