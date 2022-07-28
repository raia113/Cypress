/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Frame test', function(){
    it('iframe test', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //load the frame
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
     }
    )
}

)
