/* global Given, When, Then */

When('User clicks on the project icon on the home page', () => {
      cy.visit("https://www.d3a.io/projects");
});

Then('User lands on the project page with header {string}', (header) => {
    cy.get('h1.headline').should('have.text', header, {timeout: 20000})
});

When('User clicks on new project button', () => {
    cy.get('button.button-icon span.button__label').click({timeout: 20000})
});

When('User sees the pop-up to create new project', () => {
    cy.wait(3000)
    cy.get('h3.library-name-modal__header').should('have.text', 'New Project', {timeout: 20000})
});

When('User enter name of project as {string}', (name) => {
    cy.get('input.input-field-input-wrapper').type(name, {delay: 10}, {timeout: 20000});
});

When('Description as {string}', (description) => {
    cy.get('#textarea-field-nameTextArea').type(description, {delay: 10}, {timeout: 20000});
});

When('click on add button', () => {
    cy.get('div.library-name-modal__container button.button--accent').click({force: true})
});

Then('The project gets added to the list with heading as {string} and description as {string}', (heading, description) => {
    cy.get('div.saved-project div.saved-project__headline span.saved-project__headline__name__text').should('have.text', heading)
    cy.get('div.SavedConfigurationListSubheadline__innerWrapper p.innerWrapper__description').should('have.text', description)
});