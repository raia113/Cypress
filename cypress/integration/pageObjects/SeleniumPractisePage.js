class SeleniumPractisePage {

    getCheckboxOption1(){
        return cy.get('#checkBoxOption1')
    }

    getInputTypeCheckBox(){
        return  cy.get('input[type="checkbox"]')
    }

    getStaticDropdown(){
        return cy.get('select')

    }
    
    getDynamicDropdown(){
        return cy.get('#autocomplete')
    }

    getDynamicOptionsDropdown(){
        return cy.get('.ui-menu-item div')

    }

    getAutoCompleteOptions(){
        return cy.get('#autocomplete')

    }

    getRadioButton2(){
        return cy.get('[value="radio2"]')
    }

    getRadioButton(){
        return cy.get('[value="radio2"]')
    }

    getDisplayedText(){
        return cy.get('#displayed-text').

    }

    getHiddenText(){
        return cy.get('#hide-textbox')

    }

    getShowText(){
        return cy.get('#show-textbox')

    }

    getMouseHoverOver(){
       return cy.get('div.mouse-hover-content')

    }
}

export default SeleniumPractisePage;