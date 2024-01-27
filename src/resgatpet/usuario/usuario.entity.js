"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioEntity = void 0;
const bcrypt = require("bcrypt");
class UsuarioEntity {
    constructor(id, nome, cpf_cnpj, telefone, email, senha) {
        const saltOrRounds = 10;
        this.id = id;
        this.nome = nome;
        this.cpf_cnpj = cpf_cnpj;
        this.telefone = telefone;
        this.email = email;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
    }
    login(senha) {
        return bcrypt.compareSync(senha, this.senha);
    }
    trocaSenha(senha) {
        const saltOrRounds = 10;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
    }
}
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario.entity.js.map