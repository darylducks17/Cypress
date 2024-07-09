describe ('handle dropdowns', ()=> {

    it.skip('dropdown with select', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#country').select('Japan').should('have.value','japan')
    })

    it.skip('dropdown without select', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Japan').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Japan')
        
    })

    it.skip('auto-suggested dropdown', ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-link').should('have.length', 6)
        .contains('Delhi University')
        .click()
    })

    it('dynamic dropdown', ()=>{
        cy.visit('https://www.google.com/')
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').type('cypress automation')
        cy.wait(3000)
        cy.get('div.wM6W7d>span').should('have.length', 13)
        //jQuery function
        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text()=='cypress automation')
            {
                cy.wrap($el).click()
            }
        })
        cy.get('#APjFqb').should('have.value', 'cypress automation')
    })
})

