<p>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<div>
  <p align="center">
    <img src="https://github.com/andrecomegno/API-CRUD/blob/main/src/image/logo.jpg" alt="Logo" height="280">
  </p>
</div>

# Introdução
<p> Esse projeto é um API do Site ResgatPet com foco em resgatar pets abandonados e passar para as ONG 's responsáveis, desenvolvido no Senac no Projeto Integrador no curso de Full-Stack. Essa API é responsavel por cadastrar todos os usuarios e formularios de pet econtrados.</p>

Com a API será possivel fazer:
- **Exclusão**: Permite excluir os Usuarios e Pet.
- **Alteração**: Alteração dos Usuarios e Pet existentes.
- **Inclusão**: Permite adicionar novos Usuarios e Pet.
- **Consulta**: Consultar Usuarios e Pet.

**Professor**: JOÃO PEDRO PARELLA

## Instalação

```bash
# instalar node_modules
$ npm install
```

## Executando API

```bash
# iniciar o servidor 
$ npm run start
```

```bash
# ativação de recarregamento automático
$ npm run start:dev
```

## Postman

```bash
# inclusão
POST http://localhost:3000/usuarios
Selecione Body, raw, json

{
  "nome": "Juvenal Oliveira da Silva de Souza",
  "cpf_cnpj": 25558878946,
  "telefone": 14985554700,
  "email": "juvenal_12345@gmail.com",
  "senha": "123Batinha567"
}

```
```bash
# consultar
GET http://localhost:3000/usuarios
Selecione Params
```
```bash
# exclusão
DELET http://localhost:3000/usuarios/{"id do usuario"}
Selecione Params
```
```bash
# alteração
PUT http://localhost:3000/usuarios/{"id do usuario"}
Selecione Params
```
```bash
# json para testar
{
  "nome": "Juvenal Oliveira da Silva de Souza",
  "cpf_cnpj": 25558878946,
  "telefone": 14985554700,
  "email": "juvenal_12345@gmail.com",
  "senha": "123Batinha567"
}
```

### 👾 Linguagens e Ferramentas
<img align="left" alt="TypeScript" width="30px" src="https://github.com/andrecomegno/andrecomegno/blob/main/icon/typescript.png" />
<img align="left" alt="JavaScript" width="30px" src="https://github.com/andrecomegno/andrecomegno/blob/main/icon/javascript.png" />
<img align="left" alt="Nest.js" width="30px" src="https://github.com/andrecomegno/andrecomegno/blob/main/icon/nestjs.png" />
<img align="left" alt="Postman" width="30px" src="https://github.com/andrecomegno/andrecomegno/blob/main/icon/postman.png" />
<br>
