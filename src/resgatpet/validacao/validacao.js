"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenhaForte = exports.strongPassValidator = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const zxcvbn = require("zxcvbn");
let strongPassValidator = class strongPassValidator {
    async validate(value, validationArguments) {
        const result = zxcvbn(value);
        var validarSenha = (result.score <= 2);
        return !validarSenha;
    }
};
exports.strongPassValidator = strongPassValidator;
exports.strongPassValidator = strongPassValidator = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ async: true })
], strongPassValidator);
const SenhaForte = (opcaoValidacao) => {
    return (objeto, propriedade) => {
        (0, class_validator_1.registerDecorator)({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcaoValidacao,
            constraints: [],
            validator: strongPassValidator,
        });
    };
};
exports.SenhaForte = SenhaForte;
//# sourceMappingURL=validacao.js.map