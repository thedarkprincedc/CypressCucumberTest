import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
    Given('I visit youtube.com', () => {
        cy.visit('https://youtube.com')
            .title()
            .should('eq', 'YouTube');
    });
    When('I am on the home page', () => {
        
        // cy.get('[name="loginfmt"]')
        //     .type('brettmosley@hotmail.com')
        //     .submit();
    });
    Then('I should see a list of videos', () => {
        cy.get('#details')
            .contains('results');
    });
