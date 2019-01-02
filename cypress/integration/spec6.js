/// <reference types="cypress" />
/// <reference types="cypress-pipe" />
import { compose, map, prop } from 'ramda'

it('loads 3 elements', () => {
  cy.visit('index.html')
  // instead of using Cypress ".get" command
  // write our own function to return elements
  const getElements = doc => doc.querySelectorAll('#app div')

  const mapInnerText = map(prop('innerText'))

  const getTexts = compose(
    mapInnerText,
    getElements
  )

  cy.document()
    .pipe(getTexts)
    .should(texts => {
      expect(texts[0]).to.contain('first child')
      expect(texts[1]).to.contain('second child')
      expect(texts[2]).to.contain('third child')
    })
})

it('has expected text', () => {
  cy.visit('index.html')
  // instead of using Cypress ".get" command
  // write our own function to return elements
  const getElements = doc => doc.querySelectorAll('#app div')

  const mapInnerText = map(prop('innerText'))

  const getTexts = compose(
    mapInnerText,
    getElements
  )

  cy.document()
    .pipe(getTexts)
    .should('deep.equal', ['first child', 'second child', 'third child'])
})
