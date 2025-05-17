Feature: Dashboard

Background: Login Page
    Given User visit the URL
    
  Scenario: User sucesfully login with user name password
    When User enter username
    And User enter the password
    And click on the submit button
    Then Verify user redirect to onbording page
    Then Verify profile icon


