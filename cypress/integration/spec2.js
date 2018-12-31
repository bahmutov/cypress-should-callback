/// <reference types="cypress" />
it('3 commands', () => {
  cy.visit('index.html')
  cy.get('#app div:nth(0)')
    .should('contain', 'first child')
  cy.get('#app div:nth(1)')
    .should('contain', 'second child')
  cy.get('#app div:nth(2)')
    .should('contain', 'third child')
})
