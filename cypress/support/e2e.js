import './commands'
import 'allure-cypress'
import registerCypressGrep from '@cypress/grep'
registerCypressGrep()

beforeEach(() => {
    cy.visit('/')
})