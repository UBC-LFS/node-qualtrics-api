import request from 'request-promise'
import Bottleneck from 'bottleneck'

require('dotenv').config()

const token = process.env.QUALTRICS_API_TOKEN

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100
})

const requestObj = url => ({
  'method': 'GET',
  'uri': url,
  'json': true,
  'resolveWithFullResponse': true,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
})

const fetchAll = (url, result = []) =>
  request(requestObj(url))
    .then(response => {
      result = [...result, ...response]
      return response.nextPage ? result : fetchAll(result.next, result)
    }).catch(err => console.log(err))

const fetchAllRateLimited = limiter.wrap(fetchAll)

export default fetchAllRateLimited
