"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModule = void 0;
const common_1 = require("@nestjs/common");
const formulario_controller_1 = require("./formulario/formulario.controller");
const formulario_dm_1 = require("./formulario/formulario.dm");
const usuario_controller_1 = require("./usuario/usuario.controller");
const usuario_dm_1 = require("./usuario/usuario.dm");
let UsuarioModule = class UsuarioModule {
};
exports.UsuarioModule = UsuarioModule;
exports.UsuarioModule = UsuarioModule = __decorate([
    (0, common_1.Module)({
        controllers: [usuario_controller_1.UsuarioController, formulario_controller_1.FormularioController],
        providers: [usuario_dm_1.UsuarioArmazenados, formulario_dm_1.FormularioArmazenados]
    })
], UsuarioModule);
//# sourceMappingURL=usuarios.module.js.map