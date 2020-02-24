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
  'encoding': null,
  'json': true,
  'headers': {
    'x-api-token': token,
    'accept': 'application/json'
  }
});

const fetch = url => request(requestObj(url));

const fetchRateLimited = limiter.wrap(fetch);

module.exports = fetchRateLimited;