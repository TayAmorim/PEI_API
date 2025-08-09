# Pei - API da Plataforma de Educação Inclusiva

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow.svg)

## 🚀 Sobre o Projeto

Esta é a API RESTful que serve como o back-end para a **Pei - Plataforma de Educação Inclusiva**.

A Pei é uma solução digital especializada para apoiar o trabalho dos Auxiliares de Desenvolvimento da Educação Especial (ADEE). O principal objetivo é automatizar o diário de classe, proporcionando um registro eficaz e centralizado das atividades escolares. O projeto visa melhorar a eficiência dos ADEEs, facilitando o acompanhamento e o registro das atividades de forma mais organizada e acessível.

## ✨ Principais Funcionalidades

- **Gestão de Atividades:** Sistema completo (CRUD - Criar, Ler, Atualizar, Deletar) para o registro de atividades escolares.
- **Autenticação de Usuários:** Sistema de login seguro para os ADEEs utilizando JSON Web Tokens (JWT).
- **Gerenciamento de Alunos:** Estrutura para cadastrar e vincular alunos às atividades e aos seus respectivos ADEEs.
- **Rotas Protegidas:** Endpoints da API protegidos para garantir que apenas usuários autenticados possam acessar e modificar os dados.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **[NestJS](https://nestjs.com/):** Um framework Node.js progressivo para construir aplicações de servidor eficientes, confiáveis e escaláveis.
- **[Prisma](https://www.prisma.io/):** ORM de próxima geração para Node.js e TypeScript, utilizado para facilitar a interação com o banco de dados.
- **[TypeScript](https://www.typescriptlang.org/):** Um superset do JavaScript que adiciona tipagem estática ao código, aumentando a robustez e a manutenibilidade.
- **[PostgreSQL](https://www.postgresql.org/):** Um poderoso sistema de banco de dados relacional de código aberto (pode ser substituído por outro banco compatível com o Prisma).
- **[JWT (JSON Web Tokens)](https://jwt.io/):** Utilizado para criar tokens de acesso que autenticam e autorizam os usuários.

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:
- [Node.js](https://nodejs.org/en/) (versão 18.x ou superior recomendada)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- Uma instância do [PostgreSQL](https://www.postgresql.org/download/) rodando (ou um container [Docker](https://www.docker.com/) com a imagem do Postgres).

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em seu ambiente local:

```bash
# 1. Clone este repositório
$ git clone [https://github.com/TayAmorim/PEI_API.git](https://github.com/TayAmorim/PEI_API.git)

# 2. Navegue para a pasta do projeto
$ cd nome-da-pasta-do-projeto

# 3. Instale as dependências
$ npm install
# ou
$ yarn install

# 4. Configure as variáveis de ambiente
# Copie o arquivo .env.example para um novo arquivo .env
$ cp .env.example .env

# Abra o arquivo .env e adicione a URL de conexão do seu banco de dados:
# Exemplo para PostgreSQL:
DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO"

# Adicione também um segredo para o JWT:
JWT_SECRET="SEU_SEGREDO_SUPER_SECRETO"

# 5. Rode as migrations do Prisma para criar as tabelas no banco
$ npx prisma migrate dev

# 6. Inicie o servidor em modo de desenvolvimento
$ npm run start:dev

# O servidor estará rodando em http://localhost:3000 (ou a porta que você configurar)
```

## 📝 Endpoints da API (Exemplos)

Aqui estão alguns dos principais endpoints disponíveis:

| Método HTTP | Rota                     | Descrição                                         | Protegida? |
| :---------- | :----------------------- | :-------------------------------------------------- | :--------- |
| `POST`      | `/auth/login`            | Autentica um usuário (ADEE) e retorna um token JWT. | Não        |
| `POST`      | `/users`                 | Cria um novo usuário.                               | Não/Admin  |
| `GET`       | `/activities`            | Retorna todas as atividades do usuário logado.      | Sim        |
| `POST`      | `/activities`            | Cria uma nova atividade para o usuário logado.      | Sim        |
| `PUT`       | `/activities/:id`        | Atualiza uma atividade específica.                  | Sim        |
| `DELETE`    | `/activities/:id`        | Deleta uma atividade específica.                    | Sim        |

---
Feito com ❤️ por [Tayanna Amorim]([https://seu-link-aqui.com](https://github.com/TayAmorim))
