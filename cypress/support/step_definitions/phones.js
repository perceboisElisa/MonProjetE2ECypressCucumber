const url = 'http://localhost:8000/index.html#!/phones';

//1er scenario
given('a list of phones on phones store', () => {
  cy.visit(url);
  // Should be on a new URL which includes '/phones'
  cy.url().should('include', '/phones');
})

when('I search the phone {string} in search input', (name) => {
  // Get an input, type into it and verify that the value has been updated
  cy.get('input[ng-model="$ctrl.query"]').type(name).should('have.value', name);
})

then('I should see the overview of {string}', (name) => {
   cy.contains(name).click();
})

then('I should know the title of the page', () => {
 cy.title().should('include', 'Google Phone Gallery');
})

//2eme scenario
when('I display this phones list', () => { 
  //ng model
  cy.ng('model', '$ctrl.query')
})

then('I should get {string} phones', (number) => {
 //cy.log(number); 	
 cy.get('ul.phones li').should('have.length', number)
})



