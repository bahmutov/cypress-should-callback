/// <reference types="cypress" />
it('loads 3 elements', () => {
  cy.visit('index.html')
  const startedAt = +new Date()
  let firstAt, secondAt, thirdAt
  cy.get('#app div')
    .should(($div) => {
      expect($div.eq(0), new Date() - startedAt).to.contain('first child')
      if (!firstAt) {
        firstAt = new Date() - startedAt
      }
      expect($div.eq(1)).to.contain('second child')
      if (!secondAt) {
        secondAt = new Date() - startedAt
      }
      expect($div.eq(2)).to.contain('third child')
      if (!thirdAt) {
        thirdAt = new Date() - startedAt
      }
    })
    .then(() => {
      cy.log(`first at ${firstAt}ms`)
      cy.log(`second at ${secondAt}ms`)
      cy.log(`second at ${thirdAt}ms`)
    })
})
