/* global Given, When, Then */
const url = 'https://www.d3a.io/login';

Given('User opens d3a application page', () => {
    cy.visit(url);
});

Then('User see {string} in the title', (title) => {
    cy.title().should('include', title)
});

When('User enter email as {string}', (username) => {
    cy.get('#email').type(username)
});

When('User enter password as {string}', (password) => {
    cy.get('#password').type(password)
});

When('User click on login button', () => {
    cy.get('button.button--accent').click()
});

Then('User lands on home page with header {string}', (header) => {
    cy.get('header h1.headline').should('have.text', header)
});

