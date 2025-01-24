# Teste para Estágio Frontend - Econverse

Este repositório contém o teste técnico para a vaga de estágio Frontend na **Econverse**, desenvolvido com **React**, **TypeScript** e **SASS**.

## Requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

## Instalação

1. Clone o repositório:

   ```bash
   git clone "https://github.com/willsf2021/teste-front-end"

   ```

2. Acesse o diretório do projeto:
   ```bash
   cd <NOME_DO_DIRETORIO>
   ```
3. Instale as dependências:

- Com yarn
  ```bash
  yarn install
  ```
- Com npm
  ```bash
  npm install
  ```

## Rodando o Projeto

### Para rodar o projeto em modo de desenvolvimento

- Com yarn
  ```bash
  yarn dev
  ```
- Com npm
  ```bash
  npm run dev
  ```

#### A aplicação estará disponível em http://localhost:3000.

## Compilando para Produção

### Para gerar a versão de produção:

- Com yarn
  ```bash
  yarn build
  ```
- Com npm
  ```bash
  npm run build
  ```

#### Os arquivos de produção estarão na pasta dist/.

## Observação Importante sobre o Fetch de Dados

Este projeto consome dados de uma API externa que possui restrições de **CORS**. Para resolver esse problema, utilizei o serviço [CORS Anywhere](https://cors-anywhere.herokuapp.com/), que atua como um middleware para permitir as requisições.

### Como ativar o CORS Anywhere:

1. Acesse o site [CORS Anywhere](https://cors-anywhere.herokuapp.com/).
2. Clique no botão **"Request temporary access to the demo server"** para habilitar o proxy.
3. Após ativar, você poderá usar a aplicação normalmente no navegador.

### Por que isso é necessário?

A API consumida atualmente não possui os cabeçalhos CORS configurados para permitir acesso direto a partir de navegadores. O `CORS Anywhere` é uma solução temporária para contornar essa limitação.

> **Nota:** Essa configuração é apenas para fins de teste ou desenvolvimento. Para um ambiente de produção, o ideal seria que a API fosse ajustada para suportar CORS diretamente.


# 👉 Confira o projeto em ação: 
<a href="https://willsf2021.github.io/teste-front-end/" target="_blank" >LINK DA PÁGINA</a>
