Feature: As a user I want the abitlity to watch videos
    Scenario: User watches video from home screen
        Given I visit youtube.com homepage
        When I click the first video on the page
        Then I should should navigate to the page where I can watch the video
# Feature: As a user I want the abitlity to bookmark videos
#     Scenario: User Logs in and bookmarks video
#         Given I visit youtube.com
# Feature: As a user I want the ability to search videos
#     Scenario: User Searches video from the home screen
#         Given I visit youtube.com
