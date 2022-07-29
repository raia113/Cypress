/// <reference types="Cypress" />
import SeleniumPractisePage from '../../support/pageObjects/SeleniumPractisePage.cy'

/* This practice covers Aliasing, Fixtures, POMs, Test Hooks and Custom Commands */

describe('Selenium Testing Page Component Testing', function () {

    before(function () {
        cy.fixture('endpointConfig.json').then(function (data) {
            globalThis.data = data
            cy.visit(globalThis.data.automationPracticeUrl)
        })
        globalThis.seleniumPractisePage = new SeleniumPractisePage()
    })

    it('Checkbox verification', function () {
        globalThis.seleniumPractisePage.getCheckboxOption1().as('checkbox1')
        cy.get('@checkbox1').check().should('be.checked').and('have.value', 'option1')
        cy.get('@checkbox1').uncheck().should('not.be.checked')
        //globalThis.seleniumPractisePage.getInputTypeCheckBox().check(['option2', 'option3'])
        cy.checkBothOptions('option2')
        //cy.pause()
    })

    it('Static Dropdown verification', function () {
        globalThis.seleniumPractisePage.getStaticDropdown().select('option2').should('have.value', 'option2')

        //Dynamic dropdowns
        globalThis.seleniumPractisePage.getDynamicDropdown().type(globalThis.data.partialTestDropDownValue)

        //Navigate through dynamic option on the element 
        globalThis.seleniumPractisePage.getDynamicOptionsDropdown().each(($e1, index, $list) => {
            if ($e1.text() === globalThis.data.testDropDownValue) {
                cy.wrap($e1).click()
            }
        })
        globalThis.seleniumPractisePage.getDynamicDropdown().should('have.value', globalThis.data.testDropDownValue)
    })

    it('Text visibility verification', function () {
        globalThis.seleniumPractisePage.getDisplayedText().as('displayed')
        cy.get('@displayed').should('be.visible')
        globalThis.seleniumPractisePage.getHiddenText().click()
        cy.get('@displayed').should('not.be.visible')
        globalThis.seleniumPractisePage.getShowText().click()
        cy.get('@displayed').should('be.visible')
    })

    it('Radiobutton verification', function () {
        globalThis.seleniumPractisePage.getRadioButton2().check().should('be.checked')
    })

    it('Hover open test regular way', function () {
        //const seleniumPractisePage = new SeleniumPractisePage()
        globalThis.seleniumPractisePage.getMouseHoverOver().invoke('show') //make sure to use parent for the locator to get, otherwise top wont be clicked
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })

    it('Hover open using force click', function () {
        cy.contains('Top').click({ force: true }) //no need to find the element
        cy.url().should('include', 'top')
    })

})


