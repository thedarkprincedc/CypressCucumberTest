import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
    Given('I visit hotmail.com', () => {
        cy.visit('https://sapui5.hana.ondemand.com').title().should('eq', 'Demo Kit - SAPUI5 SDK');
        cy.get('#__button4')
            .should('be.visible')
            .click();
    
        //cy.url().should('match', /login/)
    });
    When('I login to email', () => {
        cy.get('[name="loginfmt"]')
            .type('brettmosley@hotmail.com')
            .submit();
    });
    Then('I should see my email inbox', () => {
        cy.get('#resultStats')
            .contains('results');
        });
    // When('I type in a search query', () => {
    //     cy.get('[type="text"]')
    //         .type('ICF Next')
    //         //.submit();
    //     });
    // Then('I should see related results', () => {
    //     cy.get('#resultStats')
    //         .contains('results');
    //     });