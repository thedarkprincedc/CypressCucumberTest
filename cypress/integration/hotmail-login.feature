Feature: Hotmail Login
    Scenario: Search for ICF Next
        Given I visit hotmail.com
        When I login to email
        Then I should see my email inbox