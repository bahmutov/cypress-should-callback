# cypress-should-callback [![CircleCI](https://circleci.com/gh/bahmutov/cypress-should-callback.svg?style=svg)](https://circleci.com/gh/bahmutov/cypress-should-callback)

> Example running multiple assertions from cypress `should(cb)` function

Read the companion blog post [Cypress should callback](https://glebbahmutov.com/blog/cypress-should-callback/)

## Specs

- [spec.js](cypress/integration/spec.js) just checks that 3 items appear
- [spec2.js](cypress/integration/spec2.js) checks each item using complicated selector
- [spec3.js](cypress/integration/spec3.js) introduces `should(cb)` function
- [spec4.js](cypress/integration/spec4.js) uses item after assertion passes
- [spec5.js](cypress/integration/spec5.js) shows [cypress-pipe](https://github.com/NicholasBoll/cypress-pipe#readme) to get elements
- [spec6.js](cypress/integration/spec6.js) refactors function using [Ramda](https://ramdajs.com/docs/) to make everything simpler

## More information

- See [assertion examples](https://example.cypress.io/commands/assertions)
- Read [Cypress assertions page](https://on.cypress.io/assertions)
- Read [`.should`](https://on.cypress.io/should) documentation
