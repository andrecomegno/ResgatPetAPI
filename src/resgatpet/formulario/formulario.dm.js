"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _FormularioArmazenados_formularios;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormularioArmazenados = void 0;
const common_1 = require("@nestjs/common");
let FormularioArmazenados = class FormularioArmazenados {
    constructor() {
        _FormularioArmazenados_formularios.set(this, []);
    }
    AdicionarFormulario(formulario) {
        __classPrivateFieldGet(this, _FormularioArmazenados_formularios, "f").push(formulario);
    }
    atualizaFormulario(id, dadosAtualizacao) {
        const formulario = this.buscaPorID(id);
        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            formulario[chave] = valor;
        });
        return formulario;
    }
    async removeFormulario(id) {
        const formulario = this.buscaPorID(id);
        __classPrivateFieldSet(this, _FormularioArmazenados_formularios, __classPrivateFieldGet(this, _FormularioArmazenados_formularios, "f").filter(formularioSalvo => formularioSalvo.id !== id), "f");
        return formulario;
    }
    buscaPorID(id) {
        const possivelFormulario = __classPrivateFieldGet(this, _FormularioArmazenados_formularios, "f").find(formularioSalvo => formularioSalvo.id === id);
        if (!possivelFormulario) {
            throw new Error('Formulario Não Encontrado =/');
        }
        return possivelFormulario;
    }
    get Formularios() {
        return __classPrivateFieldGet(this, _FormularioArmazenados_formularios, "f");
    }
};
exports.FormularioArmazenados = FormularioArmazenados;
_FormularioArmazenados_formularios = new WeakMap();
exports.FormularioArmazenados = FormularioArmazenados = __decorate([
    (0, common_1.Injectable)()
], FormularioArmazenados);
//# sourceMappingURL=formulario.dm.js.map