/// <reference types="cypress" />
it('loads 3 elements', () => {
  cy.visit('index.html')
  cy.get('#app div')
    .should(($div) => {
      expect($div.eq(0)).to.contain('first child')
      expect($div.eq(1)).to.contain('second child')
      expect($div.eq(2)).to.contain('third child')
    })
    .eq(2)
    .invoke('text')
    .should('equal', 'third child')
})
