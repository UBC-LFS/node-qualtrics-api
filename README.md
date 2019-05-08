[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<!-- [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) -->

# Qualtrics API for Node

Qualtrics API functions bundled as NPM package for Node.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for use with your own API tokens and Qualtrics domains.

### Prerequisites

1. **Install [Node 8.0.0 or greater](https://nodejs.org)**.
2. **Install [Git](https://git-scm.com/downloads)**.

### Installion

To use with node:

```bash
$ npm install node-qualtrics-api
```

Then, in wherever you want to use this package:

```javascript
const qualtricsAPI = require("node-qualtrics-api");
```

Attached to the `qualtricsAPI` are a bunch of functions.

### Testing

To run repo for testing:

```bash
$ npm install
$ npm run build
$ node index.js
```

Create .env file:

```env
QUALTRICS_API_DOMAIN=https://yourdatacenterid.qualtrics.com/API/v3/
QUALTRICS_API_TOKEN= YOUR QUALTRICS TOKEN
```

UBC students can get a token from ubc.qualtrics.com with their CWL

## Authors

- **Justin Lee**
  https://github.com/justin0022 | justin.lee@ubc.ca

## License

This project is licensed under the MIT License.
