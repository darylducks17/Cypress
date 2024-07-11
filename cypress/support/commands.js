// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// 
/// <reference types="Cypress"/>

Cypress.Commands.add('getIFrame', (iframeSelector, callback)=>{
    cy.get(iframeSelector).then(($iframe) => {
        //get the iframe's document body
        const $body = $iframe.contents().find('body')
        //ensure the body is loaded
        cy.wrap($body).should('not.be.empty').within(()=>{
            callback(cy)
        })
    })
})