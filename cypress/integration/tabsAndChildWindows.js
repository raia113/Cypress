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
        cy.url().should('include', 'qaclickacademy')
        
        //handling browser controls
        cy.go('back')

    })

})