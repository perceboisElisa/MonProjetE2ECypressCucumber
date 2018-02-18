const url = 'http://localhost:8000/index.html#!/phones';

given('a list of phones on phones store', () => {
  cy.visit(url);
  // Should be on a new URL which includes '/phones'
  cy.url().should('include', '/phones');
})
//^a list of phones on "([^"]*)"$/
//   this.Given(/^a list of phones on "([^"]*)"$/, function (arg1, callback) {
when('I search the phone {string} in search input', (name) => {
  cy.log ("name "+ name);
  // Get an input, type into it and verify that the value has been updated
  cy.get('input[ng-model="$ctrl.query"]').type(name).should('have.value', name)
})

then('I should see the overview of {string}', (name) => {
   cy.contains(name).click()
})