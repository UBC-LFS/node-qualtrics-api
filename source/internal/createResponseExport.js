import request from 'request-promise'
import Bottleneck from 'bottleneck'

require('dotenv').config()

const token = process.env.QUALTRICS_API_TOKEN

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100
})

const requestObj = (url, surveyId, body) => ({
  'method': 'POST',
  'uri': url,
  'json': true,
  'headers': {
    'x-api-token': token,
    'content-type': 'application/json'
  },
  'body': {
    'surveyId': surveyId,
    'format': 'csv'
  }
})

const createResponseExport = (url, surveyId) => request(requestObj(url, surveyId))
  .then(response => response.result)

const fetchRateLimited = limiter.wrap(createResponseExport)

export default fetchRateLimited
