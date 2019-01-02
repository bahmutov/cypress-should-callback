# cypress-should-callback [![CircleCI](https://circleci.com/gh/bahmutov/cypress-should-callback.svg?style=svg)](https://circleci.com/gh/bahmutov/cypress-should-callback) [![renovate-app badge][renovate-badge]][renovate-app]

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

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2019

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/cypress-should-callback/issues) on Github

## MIT License

Copyright (c) 2019 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
