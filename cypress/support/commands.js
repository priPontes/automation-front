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

Cypress.Commands.add('register', () => {
    cy.visit('/');
    cy.get('.ico-register').should('be.visible').click();
    cy.url().should('contains', '/register');
})

Cypress.Commands.add('fillInput', (path, value) => {
    cy.get(path).should('be.visible').type(value).should('have.value', value);
})

Cypress.Commands.add('fillSelect', (path, value) => {
    cy.get(path).should('be.visible').select(value).should('have.value', value);
})

Cypress.Commands.add('validateText', (path, text) => {
    cy.get(path).should('be.visible').should('contain.text', text);
})

Cypress.Commands.add('validateUrl', (path) => {
    cy.url().should('contains', path);
})

/// <reference types="cypress-xpath" />