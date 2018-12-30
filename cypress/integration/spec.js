/// <reference types="cypress" />
it('loads 3 elements', () => {
  cy.visit('index.html')
  cy.get('#app div').should('have.length', 3)
})
