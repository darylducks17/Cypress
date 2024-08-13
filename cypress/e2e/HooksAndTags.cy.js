//HOOKS BY CYPRESS
/*
hooks are derived from mocha framework
before - execute before starting all the it blocks
after - only once after all the it block; can write anywhere as order is not important
beforeEach - multiple times before every it block
afterEach - multiple time after every it block
*/


describe('HooksAndTags', () => {

    before(() => {
        cy.log('*********   launch app ********')
    })

    after(() => {
        cy.log('*********   closing app ********')
    })

    beforeEach(() => {
        cy.log('*********   login ********')
    })

    afterEach(() => {
        cy.log('*********   logout ********')
    })

    it('search', () => {
        cy.log('*********   searching ********')
    })

    it('advanced search', () => {
        cy.log('*********   advanced searching ********')
    })

    it('listing products', () => {
        cy.log('*********   searching ********')
    })
})