/// <reference types="Cypress" />
describe('Test Suite Master', function () { //added and updated name
    it('First test case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        //using alias
        cy.get('.products').as('productLocatorTable')

        //scoping parent child
        cy.get('.products').find('.product').should('have.length', 4)

        //manipulating promise to handle jquery methods or non cypress methods
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click().then(function () {
            console.log('Now the control is under browser console')
        }) //starts from 0th index

        //always avoid index and use better approaches to handle them
        cy.get('@productLocatorTable').find('.product').each(($el, index, $list) => {
            //const vegText = $el.find('h4.product-name').text().includes('Cashews')
            cy.log($el.text())
            if ($el.find('h4.product-name').text().includes('Cashews')) {
                cy.wrap($el).find('button').click() //need to wrap this
            }
        }
        )

        //assert if the logo text is currently displayed correctly
        cy.get('.brand').should('have.text', 'GREENKART')

        //to print it in logs use promise function on non cypress method text
        cy.get('.brand').then(function (logoName) {
            cy.log(logoName.text())
        })

        //added assertions
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()



    }
    )
}
)

