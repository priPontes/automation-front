/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Register', () => {
  context('Given I access the register page', () => {
    beforeEach(() => {
      cy.register();
    })

    context('When I fill out the forms and register', () => {
      beforeEach(() => {
        cy.get('#gender-female').should('be.visible').click();
        cy.fillInput('#FirstName', 'Priscila');
        cy.fillInput('#LastName', 'Pontes');
        cy.fillSelect('.date-of-birth > div > select:nth-child(1)', '1');
        cy.fillSelect('.date-of-birth > div > select:nth-child(2)', '1');
        cy.fillSelect('.date-of-birth > div > select:nth-child(3)', '1914');
        cy.fillInput('#Email', faker.internet.email({ firstName: 'priscila' }));
        cy.fillInput('#Company', 'priPontes');
        cy.fillInput('#Password', 'test12');
        cy.fillInput('#ConfirmPassword', 'test12');
      })

      it('Then I make submit and I am redirected', () => {
        cy.validateText('#register-button', 'Register')
          .click();
        cy.validateUrl('registerresult');
      })
    })
  })
})