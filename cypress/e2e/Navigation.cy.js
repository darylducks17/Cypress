describe ('Handle Tables', () => {
    
    it('navigation test', ()=>{
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.title().should("eq", "Home Page")

        cy.get('#ui-id-8').click()
        cy.get(".base").should("have.text", "Sale")

        cy.go("back")
        cy.title().should("eq", "Home Page")

        cy.go("forward")

        cy.go(-1) //back alternative
        cy.title().should("eq", "Home Page")

        cy.go(1) //forward alternative

        cy.reload() //reload the page manually


    })

    
    
})