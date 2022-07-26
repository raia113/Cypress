/// <reference types="Cypress" />
import SeleniumPractisePage from '../pageObjects/SeleniumPractisePage'

describe('Selenium Testing Page Component Testing', function () {

    before(function () {
        cy.fixture('endpointConfig').then(function (data) {
            this.data = data
        })
    })

    beforeEach(() => {
        cy.visit(this.data.seleniumPracticeUrl)

    })

    it('Checkbox Verification', function () {
        const seleniumPractisePage = new SeleniumPractisePage()
        seleniumPractisePage.getCheckboxOption1()
        seleniumPractisePage.getCheckboxOption1().check().should('be.checked').and('have.value', 'option1')
        seleniumPractisePage.getCheckboxOption1().uncheck().should('not.be.checked')
        seleniumPractisePage.getInputTypeCheckBox().check(['option2', 'option3'])

    })

    it('Static Dropdown verification', () => {
        cy.get('select').select('option2').should('have.value', 'option2')
        
        //Dynamic dropdowns
        cy.get('#autocomplete').type('ind')
        
        //Navigate through dynamic option on the element 
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if ($e1.text() === "India") {
                cy.wrap($e1).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
    })

    it('Text visibility verification', function () {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

    it('Radiobutton verification', function () {
        cy.get('[value="radio2"]').check().should('be.checked')
    })

    it('Hover open test regular way', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('div.mouse-hover-content').invoke('show') //make sure to use parent for the locator to get, otherwise top wont be clicked
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })

    it('Hover open using force click', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.contains('Top').click({ force: true }) //no need to find the element
        cy.url().should('include', 'top')
    })

})


