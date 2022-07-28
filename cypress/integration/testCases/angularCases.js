/// <reference types="Cypress" />

describe('Angular forms and Carts', function () {

    before(function () {
        cy.fixture('endpointConfig.json').then(function (data) {
            globalThis.data = data
            cy.visit(globalThis.data.angularPracticeUrl)
        })
        //globalThis.seleniumPractisePage = new SeleniumPractisePage()
    })

    it("Form Validation", function () {
        //use name attribute since class attribute changes in angular
        cy.get('input[name="name"]:nth-child(2)').type(globalThis.data.testName)
        cy.get('#exampleFormControlSelect1').select(globalThis.data.genderSelect)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', globalThis.data.testName)

    })
    it("Attribute validation- min length, disabled", function () {
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2') //can use prop too but have to resolve the promise
        cy.get('#inlineRadio3').should('be.disabled')

    })

    it("Adding smartphones to the cart", function () {
        cy.get(':nth-child(2) > .nav-link').click()

        globalThis.data.productsToAddToCart.forEach(function (element) {
            cy.selectProduct(element)
        });



    })

}
)