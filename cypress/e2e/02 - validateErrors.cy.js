/// <reference types="cypress" />

describe('Validate errors', () => {
  context('Given I access the register page', () => {
    beforeEach(() => {
      cy.register();
    })

    context('When I fill password and make submit', () => {
      beforeEach(() => {
        cy.validateText('#register-button', 'Register')
          .click();
      })

      it('Then I see errors of fields', () => {
        cy.validateText('#FirstName-error', 'First name is required.');
        cy.validateText('#LastName-error', 'Last name is required.');
        cy.validateText('#Email-error', 'Email is required.');
        cy.validateText('#ConfirmPassword-error', 'Password is required.');
      })
    })
  })
})