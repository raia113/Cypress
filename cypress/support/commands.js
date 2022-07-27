/// <reference types="Cypress" />
import SeleniumPractisePage from '../integration/pageObjects/SeleniumPractisePage'

globalThis.seleniumPractisePage = new SeleniumPractisePage()



Cypress.Commands.add('checkBothOptions', (options1) => {
    //cy.get('a').contains(label).click()
    //globalThis.seleniumPractisePage.getInputTypeCheckBox().check(['option2', 'option3'])

    globalThis.seleniumPractisePage.getInputTypeCheckBox().check(options1)




  })