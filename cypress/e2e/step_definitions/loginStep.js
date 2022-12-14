import { Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

Given("I open login page", () => {
    cy.visit("http://zero.webappsecurity.com/login.html")
})

When("I submit login", () => {
    cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password

        cy.loginStep(username, password)
    })
})

Then('I should see homepage', () => {
    cy.get("#account_summary_tab").should('be.visible')
})