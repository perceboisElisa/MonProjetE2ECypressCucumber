Feature: The Phones app
  I want to test my AngularJS app using Cucumber and Cypress
  
  Scenario: Search the details of a phone
    Given a list of phones on phones store
    When I search the phone "Dell Streak 7" in search input
    Then I should see the overview of "Dell Streak 7" 