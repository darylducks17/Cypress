describe  ('assertions demo', () => {

    it('implicit assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // can avoid capturing url multiple times, you can chain the .should()
        //cy.url().should('include', 'orangehrmlive.com')
        //cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain', 'orangehrm')

        //another simpler way to write the above test
        //positive assertions
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')

        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain', 'greenhrm')

        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('exist')
        .and('be.visible')

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Username']").should('have.value', 'Admin')
    })

    it('explicit assertions', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        
        let expName="Test 77 Kamble"

        cy.get('.oxd-userdropdown-name').then((x)=> {
            let accName=x.text()
            //BDD approach
            expect(accName).to.equal(expName)
            expect(accName).to.not.equal(expName)
            //TDD approach
            assert.equal(accName,expName)
            assert.notEqual(accName,expName)
        })


    })

})