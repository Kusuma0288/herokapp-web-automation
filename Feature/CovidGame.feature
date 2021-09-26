
@REGRESSSION
Feature: Verify the Covid 19 game challenge

Scenario: Verify the news game challenge when user enters a wrong answer

  Given user navigated to automation practice webpage homepage
  When user enters username and navigates to game page
  And user takes the news game challenge
  And user answers a question wrongly
  Then verify user lands on the home page

  Scenario: Verify the bus game challenge when user doesn't responds the first question within the time limit

    Given user navigated to automation practice webpage homepage
    When user enters username and navigates to game page
    And user takes the bus game challenge and doesn't responds the first question within the time limit
    And now the user goes for a retry and navigates to leaderboard
    And user navigates to game page from leaderboard
    Then verify user navigated to game page





