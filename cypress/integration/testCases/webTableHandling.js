/// <reference types="Cypress" />

describe('Web Table traversing', function () {

    it("Web Table traversing for row and id", function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes("Python")) {
                
                //grabs the row and confirmed index, next method to grab the sibling and then resolve promise
                // put the webelement in price argument and do magic on it
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }

        })


    })


})


