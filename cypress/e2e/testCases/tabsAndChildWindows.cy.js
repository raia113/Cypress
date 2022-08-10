describe('Opening child window and handliting alrts', function () {

    it('child window and handling alerts', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //fire browser alert window:alert and it returns str which we capture for mocha assertions
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //opening child window on the same page by removing attribute and confirming with mocha assertions
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.wait(1000)
        cy.url().should('include', 'rahulshettyacademy')
        cy.log(cy.title())
        cy.get('.col-md-8 > h2').should('contain',"JOIN OUR ACADEMY")
    
        //handling browser controls
        cy.go('back')
        //can also use prop('href) to get href is domain doesnt change
        /*cy.get('#opentab').then(function(el)){
            const url = el.prop('href')
            cy.visit(url)

        }*/

    })

})