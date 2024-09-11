# Automation-cypress-web
Projeto exemplo de automação com Cypress Web.

OBS: Esse projeto tem o intuito de demostrar uma estrutura de projeto automação com Cypress web e simplificando uso de PageObects. 
No entanto, pode haver algumas "Más praticas" por Exemplo: { force: true } devido a plataforma exemplo de testes.

Informações básicas para realizar a instalação das tecnologias e configurações para automatizar os testes. 

**Plataforma**: Click para consultar a plataforma [BugBank](https://bugbank.netlify.app/) plataforma de transferência de valores.

Para acessar o allure report [click aqui](https://raialmeida.github.io/Automation-cypress-web/)

## Dependências utilizado com cypress no projeto.

+ [Allure Report](https://allurereport.org/docs/cypress/)
+ [cypress/grep](https://www.npmjs.com/package/@cypress/grep)
+ [Faker](https://fakerjs.dev/)
+ [Cypress ESLint Plugin](https://github.com/cypress-io/eslint-plugin-cypress)

## Instalação do Gerenciado de Pacotes NodeJS.

Para instalar o NodeJs acesse o site oficial, click em Download [Versão LTS é a mais estável](https://nodejs.org/en/). 


## Instalação do Cypress e dependências

### No terminal execute o comando para instalação:

```
npm install
```

## Execução dos testes

### Para executar os testes pela interface do cypress:

```
npm run cy:open
```
### Para executar todos os testes, execute no terminal: 

```
npm run cy:run
```

### Para executar os testes por tags, execute no terminal:

```
npx cypress run -e grepTags=@tag
```

### Para executar o report Allure, execute no terminal:


Após a execução dos testes, execute os comando abaixo para gerar e abrir o report:
```
npx allure generate
```
```
npx allure open
```
 
## Regras de Organização

Versão 1.0 