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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtualizarUsuarioDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const validacao_1 = require("../../validacao/validacao");
class AtualizarUsuarioDTO {
}
exports.AtualizarUsuarioDTO = AtualizarUsuarioDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Nome não pode ser vazio" }),
    (0, swagger_1.ApiProperty)({
        example: 'Roberto Silva',
        description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
    }),
    __metadata("design:type", String)
], AtualizarUsuarioDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "CPF ou CNPJ não pode ser vazio" }),
    (0, swagger_1.ApiProperty)({
        example: '(CPF) 000.000.000-00 ou (CNPJ) 00.000.000.0000-00 ',
        description: `o CPF ou CNPJ é usado para identificação pessoal`,
    }),
    __metadata("design:type", String)
], AtualizarUsuarioDTO.prototype, "cpf_cnpj", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Telefone não pode ser vazio" }),
    (0, swagger_1.ApiProperty)({
        example: '(00)00000-0000',
        description: `O telefone pode ser usado para se comunicar com o usuário.`,
    }),
    __metadata("design:type", String)
], AtualizarUsuarioDTO.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Email não pode ser vazio" }),
    (0, swagger_1.ApiProperty)({
        example: 'teste@teste.com',
        description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
    }),
    __metadata("design:type", String)
], AtualizarUsuarioDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, validacao_1.SenhaForte)({ message: "Senha Muito Fraca" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Senha não pode ser vazio" }),
    (0, class_validator_1.MinLength)(6, { message: "Senha precisa ter pelo menos 6 digitos" }),
    (0, swagger_1.ApiProperty)({
        example: 'Asfg!4288956',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    }),
    __metadata("design:type", String)
], AtualizarUsuarioDTO.prototype, "senha", void 0);
//# sourceMappingURL=atualizarUsuario.dto.js.map