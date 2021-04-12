import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
    Given('I visit google.com', () => {
        cy.visit('http://google.com')
    });
    When('I type in a search query', () => {
        cy.get('[type="text"]')
            .type('ICF Next')
            .submit();
        });
    Then('I should see related results', () => {
        cy.get('#resultStats')
            .contains('results');
        });