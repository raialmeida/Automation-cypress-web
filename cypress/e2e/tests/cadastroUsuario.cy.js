import { faker } from '@faker-js/faker'
import { cadastroUsuario } from '../pages/cadastroUsuario.page'

describe('Cadastrar Usuário', () => {
    it('Cadastrar novo usuário', { tags: '@smoke' }, () => {
        cadastroUsuario.btnRegistrar()
        cadastroUsuario.preencherDadosConta(faker.internet.email(), faker.person.fullName(), '123456', '123456')
        cadastroUsuario.btnCadastrar()
        cadastroUsuario.validarModalText('foi criada com sucesso')
    })
})