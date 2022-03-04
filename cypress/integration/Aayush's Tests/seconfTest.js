/// <reference types="Cypress" />
describe('Cart Addition', function () {
    it('Adding Cashews to the cart', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //iterating through list of products on the webpage
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegText = $el.find('h4.product-name').text()
            if (vegText.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        }
        )
        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()



    }
    )
}
)

