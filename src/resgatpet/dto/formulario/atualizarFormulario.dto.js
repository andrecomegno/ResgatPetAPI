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
exports.AtualizarFormularioDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AtualizarFormularioDTO {
}
exports.AtualizarFormularioDTO = AtualizarFormularioDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: '<Foto do animal>',
        description: `A foto será enviada para a ONG com o objetivo de identificar o animal.`,
    }),
    __metadata("design:type", String)
], AtualizarFormularioDTO.prototype, "fotoPet", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Endereço não pode ser vazio" }),
    (0, swagger_1.ApiProperty)({
        example: 'Avenida exemplo quadra 6 próximo à loja N',
        description: `esse endereço deve ser o mais claro possível para que seja facilitada a busca ao animal.`,
    }),
    __metadata("design:type", String)
], AtualizarFormularioDTO.prototype, "endereco", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Cidade não pode ser vazio" }),
    (0, swagger_1.ApiProperty)({
        example: 'Bauru',
        description: `A cidade nos auxilia a saber quais as ONGs mais próximas.`,
    }),
    __metadata("design:type", String)
], AtualizarFormularioDTO.prototype, "cidade", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Raça não pode ser vazio" }),
    (0, swagger_1.ApiProperty)({
        example: 'Pastor alemão',
        description: `No caso de engano devemos saber a raça do cão em questão.`,
    }),
    __metadata("design:type", String)
], AtualizarFormularioDTO.prototype, "raca", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Sexo não pode ser vazio" }),
    (0, swagger_1.ApiProperty)({
        example: 'Macho ou Fêmea',
        description: `Mais um termo para facilitar a descoberta do cachorro`,
    }),
    __metadata("design:type", String)
], AtualizarFormularioDTO.prototype, "sexo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Cor não pode ser vazio" }),
    (0, swagger_1.ApiProperty)({
        example: 'Caramelo',
        description: `Informar a cor do cachorro perdido.`,
    }),
    __metadata("design:type", String)
], AtualizarFormularioDTO.prototype, "cor", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Saude não pode ser vazio" }),
    (0, swagger_1.ApiProperty)({
        example: 'doente',
        description: `Nos mostre o estado do cachorro para urgência.`,
    }),
    __metadata("design:type", String)
], AtualizarFormularioDTO.prototype, "saude", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Acessorio não pode ser vazio" }),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Coleira',
        description: `O cachorro pode ou não conter um acessório, então nos informe caso tenha.`,
    }),
    __metadata("design:type", String)
], AtualizarFormularioDTO.prototype, "acessorio", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Usuario não pode ser vazio" }),
    (0, swagger_1.ApiProperty)({
        example: 'Ronaldo de Souza',
        description: `Usuario que encontrou o Pet.`,
    }),
    __metadata("design:type", String)
], AtualizarFormularioDTO.prototype, "usuario", void 0);
//# sourceMappingURL=atualizarFormulario.dto.js.map