import 'cypress-iframe'

describe('handling frame', () => {
    it ('approach 1', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        //code that was provided by the tutorial that didn't work for the chosen practice site 
        /*
        cy.visit('https://the-internet.herokuapp.com/iframe')
        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)

            iframe.clear().type('welcome')
            cy.get("[aria-label='Bold']").click()
        */
        
        //code that works for this the practice site 
        //access the iframe element by its ID 
        cy.get('#frame-one796456169').then(($iframe) => {
            //get the iframe's document body
            const $body = $iframe.contents().find('body')
            //ensure the body is loaded
            cy.wrap($body).should('not.be.empty').within(()=>{
                //find the input field and interact with it
                cy.get('#RESULT_TextField-0').clear().type('Welcome')
            })
        })
    })

    it('approach 2 - using custom command', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        
        cy.getIFrame('#frame-one796456169', (iframebody) => {
            iframebody.get('#RESULT_TextField-0').clear().type('Welcome')
        })
    })

    it.only('approach 3 - using iframe plugin', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.frameLoaded('#frame-one796456169')
        cy.iframe('#frame-one796456169').within(() => {
            cy.get('#RESULT_TextField-0').clear().type('Welcome')
        })
        
        
        
    })
})