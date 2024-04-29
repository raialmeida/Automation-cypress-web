/**
 * Comando para realizar login na plataforma
 */
Cypress.Commands.add('login', (email, senha) => {
    cy.get('input[name="email"]').eq(0).type(email)
    cy.get('input[name="password"').eq(0).type(senha)
    cy.get('button:contains("Acessar")').click()
})

/**
 * Comando para realizar um cadastro de uma conta e salvar o número da conta e digito na variavel global
 */
Cypress.Commands.add('cadastro', (email, senha) => {
    cy.get('button:contains("Registrar")').click()
    cy.get('input[name="email"]').eq(1).clear({ force: true }).type(email, { force: true })
    cy.get('input[name="name"]').clear({ force: true }).type('Teste', { force: true })
    cy.get('input[name="password"]').eq(1).clear({ force: true }).type(senha, { force: true })
    cy.get('input[name="passwordConfirmation"]').clear({ force: true }).type(senha, { force: true })
    cy.get('#toggleAddBalance').click({ force: true })
    cy.get('button:contains("Cadastrar")').click({ force: true })
    cy.get('#toggleAddBalance').click({ force: true })
    cy.get('#modalText').invoke('text').then((text) => {
        const regex = /(\d+)-(\d+)/
        const match = regex.exec(text)
        const conta = match[1]
        const digito = match[2]
        Cypress.env('conta', conta)
        Cypress.env('digito', digito)
    })
    cy.get('#btnCloseModal').click({ force: true })
})

/**
 * Comando para validar texto do modal
 */
Cypress.Commands.add('validarTextoModal', (text) => {
    cy.get('#modalText').should('have.text', text)
    cy.get('#btnCloseModal').click()
})