Feature: Google Search
    Scenario: Search for ICF Next
        Given I visit google.com
        When I type in a search query
        Then I should see related results