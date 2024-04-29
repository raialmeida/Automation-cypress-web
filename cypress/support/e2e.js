import './commands'
import '@shelex/cypress-allure-plugin'
import registerCypressGrep from '@cypress/grep'
registerCypressGrep()

beforeEach(() => {
    cy.visit('/')
});