import { Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

Given("A user opens a website", () => {
    cy.visit("http://zero.webappsecurity.com/index.html")
})

When("A user should type into searchbox and submit", () => {
    cy.get("#searchTerm").type('Online {enter}')
})

Then("A user should see search results", () => {
    cy.get('h2').should('contain.text', 'Search Results')
})

Then("A user should see Zero - Free Access to Online Banking", () => {
    cy.get('a').should('contain.text', 'Zero - Free Access to Online Banking')
})

Then("A user should see Zero - Online Statements", () => {
    cy.get('a').should('contain.text', 'Zero - Online Statements')
})
