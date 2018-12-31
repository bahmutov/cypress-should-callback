/// <reference types="cypress" />
/// <reference types="cypress-pipe" />
it('loads 3 elements', () => {
  cy.visit('index.html')
  // instead of using Cypress ".get" command
  // write our own function to return elements
  const getElements = (doc) =>
    doc.querySelectorAll('#app div')

  cy.document()
    .pipe(getElements)
    .should((divs) => {
      // note that "getElements" returns plain NodeList
      // and not jQuery
      expect(divs[0].innerText).to.contain('first child')
      expect(divs[1].innerText).to.contain('second child')
      expect(divs[2].innerText).to.contain('third child')
    })
})
