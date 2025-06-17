# 🚀 Projeto A3 — API de Heróis - Sistemas Distribuidos

## 🎯 Projeto: Desenvolvimento de uma Aplicação Baseada em Microsserviço

## 🏗️ Descrição do Projeto

Este projeto consiste no desenvolvimento de uma API baseada na arquitetura de *microsserviços*, implementando:

- ✅ CRUD completo de *Usuários* (obrigatório)
- ✅ CRUD completo de *Heróis da Marvel*
- ✅ CRUD completo de *Heróis da DC*
- ✅ Sistema de *autenticação via JWT (JSON Web Token)*
- ✅ Persistência dos dados em banco de dados não relacional (*arquivo JSON*)
- ✅ Documentação interativa via *Swagger*

---

## ⚙️ Tecnologias Utilizadas

- Node.js
- Express
- JWT (JSON Web Token)
- Swagger (OpenAPI)
- Banco de dados simulado via arquivo JSON (db.json)

---

## 📜 Instalação e Execução

### ✔️ Pré-requisitos

- Node.js instalado na máquina
- Editor de código (VSCode recomendado)

### ✔️ Instalação dos pacotes

npm install
npm install jsonwebtoken
npm install dotenv
npm install jsonwebtoken dotenv simple-crypto-js

node server.js
ou, se estiver configurado no package.json:
npm start

🔑 Acesso e Autenticação
🔒 Realize o login:
Endpoint: /auth

Método: POST
{
  "login": "admin",
  "senha": "12345"
}
✅ Retornará um token JWT.

💡 Este token deve ser utilizado no campo Authorize no Swagger ou no Header Authorization no formato:

Bearer SEU_TOKEN_AQUI
📑 Acessando a documentação Swagger
Execute o servidor.

Acesse no navegador:
http://localhost:3002

✅ A interface Swagger abrirá com todos os endpoints prontos para testar.
https://editor.swagger.io (Copie o APIDOC.json nesse editor)

🛠️ Funcionalidades Disponíveis
🔐 Autenticação
POST /auth → Login que gera o token JWT.

👥 Usuários
GET /usuarios → Lista usuários
POST /usuarios → Cria um novo usuário
PUT /usuarios/:id → Atualiza um usuário
DELETE /usuarios/:id → Remove um usuário

🦸 Marvel
GET /marvel → Lista heróis da Marvel
POST /marvel → Cadastra um herói da Marvel
PUT /marvel/:id → Atualiza um herói da Marvel
DELETE /marvel/:id → Remove um herói da Marvel

🦸 DC
GET /dc → Lista heróis da DC
POST /dc → Cadastra um herói da DC
PUT /dc/:id → Atualiza um herói da DC
DELETE /dc/:id → Remove um herói da DC

👥 Alunos Participantes
Pietro Gregório Cordeiro — RA: 822164917
Ronaldo Bueno — RA: 824216740
Guilherme — RA: (inserir RA)
Leonardo Melo — RA: 824217226
Nick — RA: 825155602
