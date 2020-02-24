var request = require('request-promise');

var Bottleneck = require('bottleneck');

require('dotenv').config();

const token = process.env.QUALTRICS_API_TOKEN;

const limiter = new Bottleneck({
    maxConcurrent: 20,
    minTime: 100
});

const requestObj = (url, data) => ({
    'method': 'PUT',
    'uri': url,
    'encoding': null,
    'json': true,
    'headers': {
        'x-api-token': token,
        'content-type': 'application/json'
    },
    'body': data
});

const update = (url, data) => request(requestObj(url, data));

const updateRateLimited = limiter.wrap(update);

module.exports = updateRateLimited;