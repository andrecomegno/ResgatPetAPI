"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const atualizarUsuario_dto_1 = require("../dto/usuario/atualizarUsuario.dto");
const usuario_dto_1 = require("../dto/usuario/usuario.dto");
const usuario_dm_1 = require("./usuario.dm");
const listaUsuario_dto_1 = require("../dto/usuario/listaUsuario.dto");
const usuario_entity_1 = require("./usuario.entity");
const uuid_1 = require("uuid");
const loginUsuario_dto_1 = require("../dto/usuario/loginUsuario.dto");
const swagger_1 = require("@nestjs/swagger");
let UsuarioController = class UsuarioController {
    constructor(clsUsuarioArmazenados) {
        this.clsUsuarioArmazenados = clsUsuarioArmazenados;
    }
    async RetornoUsuarios() {
        const usuarioListados = await this.clsUsuarioArmazenados.Usuarios;
        const listaRetorno = usuarioListados.map(usuario => new listaUsuario_dto_1.ListaUsuarioDTO(usuario.id, usuario.nome, usuario.cpf_cnpj, usuario.telefone, usuario.email, usuario.senha));
        return listaRetorno;
    }
    async CriaUsuario(dadosUsuario) {
        var usuario = new usuario_entity_1.UsuarioEntity((0, uuid_1.v4)(), dadosUsuario.nome, dadosUsuario.cpf_cnpj, dadosUsuario.telefone, dadosUsuario.email, dadosUsuario.senha);
        this.clsUsuarioArmazenados.AdicionarUsuario(usuario);
        var retorno = {
            id: usuario.id,
            message: 'Usuario Criado =)'
        };
        return retorno;
    }
    async Login(dadosUsuario) {
        var login = this.clsUsuarioArmazenados.validarLogin(dadosUsuario.email, dadosUsuario.senha);
        return {
            usuario: login[1] ? login[0] : null,
            status: login[1],
            message: login[1] ? "Login Efetuado" : "Usuario ou senha invalidos !"
        };
    }
    async atualizaUsuario(id, novosDados) {
        const usuarioAtualizado = await this.clsUsuarioArmazenados.atualizaUsuario(id, novosDados);
        return {
            usuario: usuarioAtualizado,
            message: 'Usuario Atualizado com Sucesso ! ;)'
        };
    }
    async removeUsuario(id) {
        const usuarioRemovido = await this.clsUsuarioArmazenados.removeUsuario(id);
        return {
            usuario: usuarioRemovido,
            message: 'Usuario removido com Sucesso :S'
        };
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna os usuários cadastrados.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "RetornoUsuarios", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Retorna que houve sucesso ao cadastrar o usuário e retorna o ID criado.' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_dto_1.UsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "CriaUsuario", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna se houve sucesso no login. O retorno "Status" diz se houve sucesso ou não.' }),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginUsuario_dto_1.LoginUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "Login", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao alterar o usuário.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o usuário não foi encontrado.' }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualizarUsuario_dto_1.AtualizarUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "atualizaUsuario", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Retorna que houve sucesso ao remover o usuário.' }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "removeUsuario", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, swagger_1.ApiTags)('usuario'),
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [usuario_dm_1.UsuarioArmazenados])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map