require ('@4tw/cypress-drag-drop')

describe('Mouse Operations', () => {
    it('Move Over', () => {
        cy.visit('https://practice.expandtesting.com/hovers')
        cy.get(':nth-child(4) > .figcaption > a').should('not.be.visible')
        cy.get(":nth-child(4) > img").trigger("mouseover").click()
        //forces a click on a hidden element
        cy.contains(':nth-child(4) > .figcaption > a').invoke('show').click({force: true})
        //cy.get(':nth-child(4) > .figcaption > a').should('be.visible')
    })

    it('Right Click', () => {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        //approach 1
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        cy.get('.context-menu-list.context-menu-root').should('be.visible')
        //approach 2 
        //cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-list.context-menu-root').should('be.visible')
    })

    it('Double Click', () => {
        cy.visit('https://artoftesting.com/samplesiteforselenium')
        
        //approach 1
        cy.get('#dblClkBtn').trigger('dblclick')
        cy.on('window:alert', (t) => {
            expect(t).to.contains('Hi! Art Of Testing, Here!')
        })
        //approach 2 
        //cy.get('#dblClkBtn').dblclick()
        
    })

    it('Drag and Drop using Plugin', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        //droppable element was hidden hence the force:true 
        cy.get("#draggable").drag("#droppable", {force:true})
    })

    it.only('Scrolling Page', () => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        //scroll down
        cy.get("li:nth-child(12) div:nth-child(1)").scrollIntoView()
        cy.get("li:nth-child(12) div:nth-child(1)").should('be.visible')
        //scroll up
        cy.get("img[alt='Hass avocado']").scrollIntoView()
        cy.get("img[alt='Hass avocado']").should('be.visible')
        //scroll to footer
        cy.get('#footer').scrollIntoView()
    })
})
