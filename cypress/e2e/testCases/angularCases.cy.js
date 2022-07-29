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
        cy.contains('Checkout').click() //or use contains cy.containshey, 
        
          //adding assertions to the product sum
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) => {
            const amount = $e1.text()
            var res = amount.split(" ") //splitting on white space to remove currency
            res = res[1].trim()
            sum = Number(sum) + Number(res) //converting string to number
        }).then(function()
        {
            cy.log('value of sum is '+sum)
        
        }
        )

        cy.get('h3 strong').then(function(element){
            const totalAmount = element.text().split(" ")[1].trim() //all in one g
            //var res = totalAmount.split(" ")
            //var total = totalAmount[1].trim()
            expect(Number(totalAmount)).to.equal(Number(sum))

        })

        cy.contains('Checkout').click()
        cy.get('#country').type('Canada')
        cy.get('#checkbox2').check({force: true}) //for id use hash
        cy.get('input[type="submit"]').click() //using CSS
        //cy.get('.alert').should('include.text', 'Your order will be delivered')
        //or use regex to grab text

      
        


        cy.get('.alert').then(function(i){
            let msg = i.text()
            expect(msg.includes("Success")).to.be.true //BDD assertion
            
    })



    })

}
)