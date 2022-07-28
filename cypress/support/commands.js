/// <reference types="Cypress" />
import SeleniumPractisePage from '../e2e/pageObjects/SeleniumPractisePage'

globalThis.seleniumPractisePage = new SeleniumPractisePage()



Cypress.Commands.add('checkBothOptions', (options1) => {
  //cy.get('a').contains(label).click()
  //globalThis.seleniumPractisePage.getInputTypeCheckBox().check(['option2', 'option3'])

  globalThis.seleniumPractisePage.getInputTypeCheckBox().check(options1)
})

Cypress.Commands.add('selectProduct', (productName) => {
  cy.get('h4.card-title').each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.get('button.btn.btn-info').eq(index).click()
    }
  })
})