describe('capture screenshots and videos test', () => {
    it('capture screenshots', ()=>{
        cy.visit('https://magento.softwaretestingboard.com/')
        
        //screenshot of the whole page
        cy.screenshot("homepage")
        cy.wait(5000)
        //screenshot of the element (logo)
        cy.get("img[src='https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg']").screenshot()
        
        //automatically capture screenshot and video on failure - only when you execute through CLI
        cy.get("a[id='ui-id-8']").click()
        cy.get(".base").should("not.have.text", "Sale")
    })
})