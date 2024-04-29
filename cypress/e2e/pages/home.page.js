export const homePage = {

    btnTranferencia() {
        cy.get('#btn-TRANSFERÊNCIA').click()
    },

    btnExtrato() {
        cy.get('#btn-EXTRATO').click()
    }
}