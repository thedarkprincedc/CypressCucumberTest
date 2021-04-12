import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

    Given('I visit youtube.com homepage', () => {
        return cy.visit('https://youtube.com').title()
            .should('eq', 'YouTube')
    });
    
    When('I click the first video on the page', () => {
        cy.get("ytd-rich-item-renderer")
            .first()
            .click()
    });
    Then('I should should navigate to the page where I can watch the video', () => {
        cy.url().should('match', /^.*watch\?v\=[A-Z0-9\_]+/i)
    });
   


    