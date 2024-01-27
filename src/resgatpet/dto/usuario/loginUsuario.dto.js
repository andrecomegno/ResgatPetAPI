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
exports.LoginUsuarioDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LoginUsuarioDTO {
}
exports.LoginUsuarioDTO = LoginUsuarioDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Email não pode ser vazio" }),
    (0, class_validator_1.IsEmail)(undefined, { message: "email é invalido" }),
    (0, swagger_1.ApiProperty)({
        example: 'teste@teste.com',
        description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
    }),
    __metadata("design:type", String)
], LoginUsuarioDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Senha Não pode ser vazio" }),
    (0, class_validator_1.MinLength)(6, { message: "Senha precisa ter pelo menos 6 digitos" }),
    (0, swagger_1.ApiProperty)({
        example: 'Asd@444555666',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    }),
    __metadata("design:type", String)
], LoginUsuarioDTO.prototype, "senha", void 0);
//# sourceMappingURL=loginUsuario.dto.js.map