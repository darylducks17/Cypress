describe('Handle Tabs', () => {

    it ('Approach 1', () => {
        //parent tab
        cy.visit('https://the-internet.herokuapp.com/windows')
        //clicking on the link and removing the target attribute to open the child tab on the same page
        cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click()
        //assertion
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        //back to parent tab
        cy.go('back')
    })

    it ('Approach 2', () => {
        //parent tab
        cy.visit('https://the-internet.herokuapp.com/windows')
        //jQuery function to capture the href of new tab and save it in a variable
        //One limitation is that the domain should be the same or the function will not function
        cy.get("a[href='/windows/new']").then((e)=>{
            let url = e.prop('href')
            cy.visit(url)
        })
        //assertion
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
    })
})