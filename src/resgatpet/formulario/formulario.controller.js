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
exports.FormularioController = void 0;
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const listaFormulario_dto_1 = require("../dto/formulario/listaFormulario.dto");
const formulario_dm_1 = require("./formulario.dm");
const formulario_dto_1 = require("../dto/formulario/formulario.dto");
const formulario_entity_1 = require("./formulario.entity");
const atualizarFormulario_dto_1 = require("../dto/formulario/atualizarFormulario.dto");
const swagger_1 = require("@nestjs/swagger");
let FormularioController = class FormularioController {
    constructor(clsFormularioArmazenados) {
        this.clsFormularioArmazenados = clsFormularioArmazenados;
    }
    async RetornoFormulario() {
        const formularioListados = await this.clsFormularioArmazenados.Formularios;
        const listaRetorno = formularioListados.map(formulario => new listaFormulario_dto_1.ListaFormularioDTO(formulario.id, formulario.fotoPet, formulario.endereco, formulario.cidade, formulario.raca, formulario.sexo, formulario.cor, formulario.saude, formulario.acessorio, formulario.usuario));
        return listaRetorno;
    }
    async CriaFormulario(dadosFormulario) {
        var formulario = new formulario_entity_1.FormularioEntity((0, uuid_1.v4)(), dadosFormulario.fotoPet, dadosFormulario.endereco, dadosFormulario.cidade, dadosFormulario.raca, dadosFormulario.sexo, dadosFormulario.cor, dadosFormulario.saude, dadosFormulario.acessorio, dadosFormulario.usuario);
        this.clsFormularioArmazenados.AdicionarFormulario(formulario);
        var retorno = {
            id: formulario.id,
            message: 'Formulario Criado =)'
        };
        return retorno;
    }
    async atualizaFormulario(id, novosDados) {
        const formularioAtualizado = await this.clsFormularioArmazenados.atualizaFormulario(id, novosDados);
        return {
            formulario: formularioAtualizado,
            message: 'Formulario Atualizado com Sucesso ! ;)'
        };
    }
    async removeFormulario(id) {
        const formularioRemovido = await this.clsFormularioArmazenados.removeFormulario(id);
        return {
            formulario: formularioRemovido,
            message: 'Formulario removido com Sucesso :S'
        };
    }
};
exports.FormularioController = FormularioController;
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Retorna uma lista com os dados cadastrados.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "RetornoFormulario", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Cria o formulario com base nos dados fornecidos.' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [formulario_dto_1.FormularioDTO]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "CriaFormulario", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao alterar o usuário.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o usuário não foi encontrado.' }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualizarFormulario_dto_1.AtualizarFormularioDTO]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "atualizaFormulario", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Retorna que houve sucesso ao remover o cadastro do formulário.' }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FormularioController.prototype, "removeFormulario", null);
exports.FormularioController = FormularioController = __decorate([
    (0, swagger_1.ApiTags)('formulario'),
    (0, common_1.Controller)('formulario'),
    __metadata("design:paramtypes", [formulario_dm_1.FormularioArmazenados])
], FormularioController);
//# sourceMappingURL=formulario.controller.js.map