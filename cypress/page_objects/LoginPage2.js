class Login2 {
    txtUserName = "input[placeholder='Username']"
    txtPassWord = "input[placeholder='Password']"
    btnSubmit = "button[type='submit']"
    lblMsg = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"

    setUserName(username) {
        cy.get(this.txtUserName).type(username)
    }
    setPassWord(password) {
        cy.get(this.txtPassWord).type(password)
    }
    clickSubmit() {
        cy.get(this.btnSubmit).click()
    }
    verifyLogin(){
        cy.get(this.lblMsg).should("have.text", "Dashboard")
    }

}

export default Login2