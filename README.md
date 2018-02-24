##Installation
npm install cypress --save-dev

##Lancement
./node_modules/.bin/cypress open

avec simplification: npm run cypress:open

##Syntaxe Gherkin
ajouter dans cypress/plugins/index.js

const cucumber = require('cypress-cucumber-preprocessor').default;
const {given} = require('cypress-cucumber-preprocessor'); 
const {then} = require('cypress-cucumber-preprocessor'); 
const {when} = require('cypress-cucumber-preprocessor');

module.exports = (on, config) => { on('file:preprocessor', cucumber()) }

##Lancer des suites de tests et videos
./node_modules/.bin/cypress run --record --key 236b086f-6c42-4488-bd1f-a6586669807a

avec simplification: npm run cypress:run:record
