# wdio/browserstack testing

## Getting Started

Use yarn to install all the package.json dependencies.

```sh
yarn install
```

Also, make sure your system has `jre (java runtime)` installed. It is needed for `selenium-standalone-service`.

Configure following environment variables:

```
BASE_URL
BROWSERSTACK_HOST
BROWSERSTACK_USERNAME
BROWSERSTACK_ACCESS_KEY
```

ENV can be set with `.env` file for running locally.

## Running Tests

Tests can be run as follows:

```sh
# run test locally
yarn test:local

# run test with browserstack
yarn test:browserstack

# run test locally and on browserstack
yarn test
```
