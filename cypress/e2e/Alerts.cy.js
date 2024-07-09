
describe ('Alerts', () => {
    //1. javascript alert - it will have some text and an 'OK' button 
    it('javascript alert', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[onclick='myFunctionAlert()']").click()
        //events
        cy.on('window:alert', (t) => {
            expect(t).to.contains("I am an alert box!")
        })
    }) 

    //2. javascript confirm alert - it will have some text with 'OK' and 'Cancel' buttons
    it('javascript confirmation alert - using OK button', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[onclick='myFunctionConfirm()']").click()
        //events
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('Press a button!')
        })
        cy.get('#demo').should('have.text', 'You pressed OK!')
    })

    it('javascript confirmation alert - using CANCEL button', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[onclick='myFunctionConfirm()']").click()
        //events
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('Press a button!')
        })
        cy.on('window:confirm', () => false)
        cy.get('#demo').should('have.text', 'You pressed Cancel!')
    })

    //3. javascript prompt alert - it will have some text with a text box for user input along with 'OK'
    it('javascript prompt alert - using OK button', () => {
        //create event before opening the alert so it can type something and then either click OK or Cancel
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })
        cy.get("button[onclick='myFunctionPrompt()']").click()
        cy.get('#demo').should('have.text', "Hello welcome! How are you today?" )
    })

    it('javascript prompt alert - using CANCEL button', () => {
        //create event before opening the alert so it can type something and then either click OK or Cancel
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').callsFake(() => null)
        })
        cy.get("button[onclick='myFunctionPrompt()']").click()
        cy.get('#demo').should('have.text', 'User cancelled the prompt.')
    })

    //4. authenticated alert
    it.only('javascript autenicated alert - approach 1', () => {
        //approach 1
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: {username: 'admin', password: 'admin' }})
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations!')
    })

    it.only('javascript autenicated alert - approach 2', () => {
        //approach 2
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations!')
    })
})