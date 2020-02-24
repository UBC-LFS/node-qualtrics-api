var request = require('request-promise');

var Bottleneck = require('bottleneck');

require('dotenv').config();

const token = process.env.QUALTRICS_API_TOKEN;

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100
});

const requestObj = url => ({
  'method': 'GET',
  'uri': url,
  'json': true,
  'headers': {
    'x-api-token': token
  }
});

const fetchAll = (url, result = []) => request(requestObj(url)).then(response => {
  result = [...result, ...response.result.elements];
  return response.nextPage ? fetchAll(requestObj(result.nextPage), result) : result;
}).catch(err => console.log(err));

const fetchAllRateLimited = limiter.wrap(fetchAll);

module.exports = fetchAllRateLimited;