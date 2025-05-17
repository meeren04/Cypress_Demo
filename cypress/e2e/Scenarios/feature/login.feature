Feature: test1

Background: Login Page
    Given User visit the URL

  Scenario: User sucesfully login with user name password
    When User enter username
    And User enter the password
    And click on the submit button
    Then Verify user redirect to onbording page


Scenario: User get error msg when user enter wrong user name or password
    When User enter username
    And User enter the wrong password
    And click on the submit button
    Then Verify user gets error message
