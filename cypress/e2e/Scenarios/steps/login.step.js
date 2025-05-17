import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import  {loginpage} from '../../../support/pageObject/login.page';



Given('User visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

});

Then('User enter username', () => {
  cy.readFile(
    'cypress/fixtures/login-data.json').then (
     (users) =>{
      const email = users.username;
      loginpage.enterEmail(email );
  });
});


When('User enter the password', () =>{
  cy.readFile(
    'cypress/fixtures/login-data.json').then (
      (users) =>{
loginpage.enterPassword(users.password);
      });
});

When('click on the submit button', () =>{
loginpage.clickOnConformButton();
});

Then('Verify user redirect to onbording page', () => {
loginpage.redirectToOnbording();
});

When('User enter the wrong password', () =>{
  cy.readFile(
    'cypress/fixtures/login-data.json').then (
      (users) =>{
loginpage.enterPassword(users.pas);
      });
});

Then('Verify user gets error message', () => {
  loginpage.verifyErrorMsg('Invalid credentials');
  });

  Then('Verify profile icon', () => {
    loginpage.verifyicon('Invalid credentials');
    });
  
