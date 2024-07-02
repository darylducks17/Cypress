describe('check UI elements', () => {
    it('checking radio buttons', () =>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        //visibility of radio buttons
        cy.get('#female').should('be.visible')
        cy.get('#male').should('be.visible')
        //selecting radio buttons
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

    })

    it('checking checkboxes', () => {
        //visibility of checkboxes
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#sunday').should('be.visible')
        //selecting single check box
        cy.get('#sunday').check().should('be.checked')
        //unselecting single check box
        cy.get('#sunday').uncheck().should('not.be.checked')
        //selecting all the checkboxes
        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('be.checked')
        //select the first & last checkbox among many
        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').last().check().shoulc('be.checked')
        
    })  
    
})