import { homePage } from '../pages/home.page'
import { transferencia } from '../pages/transferencia.page'

beforeEach(() => {
    cy.cadastro('almeidateste@hotmail.com', '741852')
    cy.cadastro('almeidateste2@hotmail.com', '741852')
    cy.login('almeidateste@hotmail.com', '741852')
})

describe('Tranferência de valores para outra conta', () => {

    it('Transferir R$100 para conta Teste com saldo', { tags: '@smoke' }, () => {
        homePage.btnTranferencia()
        transferencia.preencherDadosConta(Cypress.env('conta'), Cypress.env('digito'), 100, 'teste')
        transferencia.btnTransferir()
        cy.validarTextoModal('Transferencia realizada com sucesso')
        transferencia.btnVoltar()
        transferencia.validarSaldo('R$900,00')
        homePage.btnExtrato()
        transferencia.validarSaldoExtrato('R$900,00')
    })

    it('Transferir R$100 com saldo insuficiente', () => {
        homePage.btnTranferencia()
        transferencia.preencherDadosConta(Cypress.env('conta'), Cypress.env('digito'), 100001, 'teste')
        transferencia.btnTransferir()
        cy.validarTextoModal('Você não tem saldo suficiente para essa transação')
    })
})