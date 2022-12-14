Feature: Login page

    Scenario: Success Login
        Given I open login page
        When I submit login
        Then I should see homepage