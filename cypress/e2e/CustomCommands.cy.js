describe ('custom commands', () => {
    //click on link using label 
    it('handling links', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        //direct - without using custom command
        //cy.get("a[title='Radiant Tee']").click()
        //custom command
        cy.clickLink("Radiant Tee")
        cy.get('.base').should("have.text", "Radiant Tee")
    })
    //over writing existing contains() command
    it('overwriting existing command', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        //custom command
        cy.clickLink("RADIANT TEE")
        cy.get('.base').should("have.text", "Radiant Tee")
    })
    //reusable custom command
    it.only('login command', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.clickLink('Sign In')
        cy.loginApp('emai+200l@email.com', 'email_1234')
        cy.get('.base').should('have.text', 'Home Page')
        
    })
})
