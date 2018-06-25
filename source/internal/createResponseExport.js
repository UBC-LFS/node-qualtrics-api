import request from 'request-promise'
import Bottleneck from 'bottleneck'
import fs from 'fs'

require('dotenv').config()

const token = process.env.QUALTRICS_API_TOKEN

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100
})

const requestObj = (url, surveyId) => ({
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

const fetchRateLimited = limiter.wrap(createResponseExport)

export default fetchRateLimited
