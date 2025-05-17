import {actions} from '../cypressWrappers/actions';
import {assertions} from '../cypressWrappers/assertions';


class LogInPage {

// ## Page Element###

emailInput() {
    return cy.get("input[placeholder='Username']");
  }

passwordInput() {
    return cy.get("input[placeholder='Password']");
  }

confirmButton() {
    return cy.get('button[type="submit"]');
  }

  errorMsg(){
    return cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text')
  }

  icon() {
    return cy.get('.oxd-userdropdown-img');
  }

// ## Page Action ##

enterEmail(email) {
    actions.type(this.emailInput(), email);
  }

enterPassword(password) {
    actions.type(this.passwordInput(), password);
  }

clickOnConformButton() {
    actions.click(this.confirmButton());
}
// ## Page   ###

redirectToOnbording() {
    cy.url().should("include", "/index");

}

verifyErrorMsg(txt) {
  assertions.assertElementExist(this.errorMsg(), txt);
}

verifyicon() {
  assertions.assertElementExist(this.icon());
}

}

 export const loginpage = new LogInPage();