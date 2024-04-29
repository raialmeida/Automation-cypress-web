export const cadastroUsuario = {

    btnRegistrar() {
        cy.get('button:contains("Registrar")').click()
    },

    preencherDadosConta(email, nome, senha, confirmSenha) {
        cy.get('input[name="email"]').eq(1).type(email, { force: true })
        cy.get('input[name="name"]').type(nome, { force: true })
        cy.get('input[name="password"]').eq(1).type(senha, { force: true })
        cy.get('input[name="passwordConfirmation"]').type(confirmSenha, { force: true })
    },

    checkCriarSaldo() {
        cy.get('#toggleAddBalance').click()
    },

    btnCadastrar() {
        cy.get('button:contains("Cadastrar")').click({ force: true })
    },

    validarModalText(texto) {
        cy.get('#modalText').should('contain.text', texto)
        cy.get('#btnCloseModal').click({ force: true })
    }
}