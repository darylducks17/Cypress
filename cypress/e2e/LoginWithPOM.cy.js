import Login from "../page_objects/LoginPage.js"
import Login2 from "../page_objects/LoginPage2.js"

describe('POM', ()=>{
    //general approach
    /*it('login test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        
    })*/
    
    //using POM
    it('login test - POM ver 1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        const ln = new Login()
        ln.setUserName("Admin")
        ln.setPassWord("admin123")
        ln.clickSubmit()
        ln.verifyLogin()
    })

    it('login test - POM ver 2 and Fixtures', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.fixture("orangehrm").then((data)=>{
            const ln = new Login2()
            ln.setUserName(data.username)
            ln.setPassWord(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })
        
    })
})