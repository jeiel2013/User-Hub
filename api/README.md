# API de Autenticação e Cadastro de Usuários

Esta API foi desenvolvida para gerenciar a autenticação e o cadastro de usuários, servindo como base para um sistema de login e registro de contas. A API foi construída utilizando o **NestJS**, e futuramente será integrada com um frontend desenvolvido em **ReactJS**.

## Funcionalidades

- **Cadastro de Usuários**: Permite a criação de novos usuários com validação dos dados.
- **Gerenciamento de Usuários**: Atualização e exclusão de perfis de usuários.
- **Proteção de Rotas**: Apenas usuários autenticados podem acessar determinadas rotas.

## Tecnologias Utilizadas

- **Node.js**
- **NestJS**: Framework utilizado para a construção da API.
- **Prisma**: ORM utilizado para interagir com o banco de dados.
- **TypeScript**: Linguagem principal usada no projeto.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/jeiel2013/User-Hub.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` com as configurações do banco de dados e JWT:
   ```
   DATABASE_URL=your_database_url
   JWT_SECRET=your_secret_key
   ```
4. Execute as migrations do Prisma para criar as tabelas no banco de dados:
   ```bash
   npx prisma migrate dev
   ```
5. Inicie o servidor:
   ```bash
   npm run start:dev
   ```

## Estrutura de Pastas

- **src/**: Contém os arquivos principais da aplicação (controllers, services, modules).
- **prisma/**: Contém o esquema do banco de dados e migrations.
- **test/**: Testes unitários e de integração.

## Próximos Passos

- **Integração com o Frontend**: A API será integrada com um sistema frontend desenvolvido em **ReactJS**.
- **Melhorias de Segurança**: Implementação de criptografia de senhas e outras boas práticas de segurança.
  