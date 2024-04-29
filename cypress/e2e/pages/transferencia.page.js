export const transferencia = {

    preencherDadosConta(conta, digito, valor, descrição) {
        cy.get('input[type*="accountNumber"]').type(conta)
        cy.get('input[type*="digit"]').type(digito)
        cy.get('input[type*="transferValue"]').type(valor)
        cy.get('input[type*="description"]').type(descrição)
    },

    btnTransferir() {
        cy.get('button[type*="submit"]').click()
    },

    btnVoltar() {
        cy.get('#btnBack').click()
    },

    validarSaldo(valor) {
        cy.get('#textBalance > span').invoke('text').then((text) => {
            const valorAtual = text.replace(/\s/g, '')
            expect(valorAtual).to.equal(valor)
        })
    },

    validarSaldoExtrato(valor) {
        cy.get('#textBalanceAvailable').invoke('text').then((text) => {
            const valorAtual = text.replace(/\s/g, '')
            expect(valorAtual).to.equal(valor)
        })
    }
}