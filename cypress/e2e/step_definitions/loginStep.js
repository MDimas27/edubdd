import { Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "./loginPage";

Given("I open login page", () => {
    // cy.visit("http://zero.webappsecurity.com/login.html")
    LoginPage.visit()
})

When("I submit login", () => {
    // cy.fixture("user").then(user => {
    //     const username = user.username
    //     const password = user.password

    //     cy.loginStep(username, password)
    // })
    LoginPage.fillUsernameAndPassword('username', 'password')
    LoginPage.signIn()
})

Then('I should see homepage', () => {
    cy.get("#account_summary_tab").should('be.visible')
})