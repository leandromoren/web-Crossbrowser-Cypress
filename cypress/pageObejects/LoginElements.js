export default class LoginElements {

    //Elementos de la pagina
    usernameInput = "#username";
    passwordInput = "#password";
    loginSubmitButton = "#submit";
    incorrectUserMsg = "body > div > div > div > div.ng-binding.ng-scope.alert.alert-danger";
    welcomeUserMsg = "#logged-in-message > h2";
    loggedInMsg = "#logged-in";

    //Objetivo
    endpoint = "/login-form"

    getUsernameInput(){
        return cy.get(this.usernameInput, {timeout: 5000});
    }
    getWelcomeUserMsg(){
        return cy.get(this.welcomeUserMsg, {timeout: 5000});
    }
    getLoggedInMsg(){
        return cy.get(this.loggedInMsg, {timeout: 5000});
    }
    getIncorrectUserMsg(){
        return cy.get(this.incorrectUserMsg, {timeout: 5000});
    }
    getPasswordInput(){
        return cy.get(this.passwordInput, {timeout: 5000});
    }
    getLoginSubmitButton(){
        return cy.get(this.loginSubmitButton, {timeout: 5000});
    }
    goToURL(){
        return cy.visit(this.endpoint);
    }
}