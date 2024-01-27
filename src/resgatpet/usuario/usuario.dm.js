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
var _UsuarioArmazenados_usuario;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioArmazenados = void 0;
const common_1 = require("@nestjs/common");
let UsuarioArmazenados = class UsuarioArmazenados {
    constructor() {
        _UsuarioArmazenados_usuario.set(this, []);
    }
    AdicionarUsuario(usuario) {
        __classPrivateFieldGet(this, _UsuarioArmazenados_usuario, "f").push(usuario);
    }
    atualizaUsuario(id, dadosAtualizacao) {
        const usuarios = this.buscaPorID(id);
        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            else if (chave == 'senha') {
                usuarios.trocaSenha(valor);
                return;
            }
            usuarios[chave] = valor;
        });
        return usuarios;
    }
    buscarPorEmail(email) {
        const possivelUsuario = __classPrivateFieldGet(this, _UsuarioArmazenados_usuario, "f").find(usuarios => usuarios.email === email);
        return possivelUsuario;
    }
    validarLogin(email, senha) {
        const usuario = this.buscarPorEmail(email);
        if (usuario)
            return [usuario, usuario.login(senha)];
        else
            return [null, false];
    }
    async removeUsuario(id) {
        const usuarios = this.buscaPorID(id);
        __classPrivateFieldSet(this, _UsuarioArmazenados_usuario, __classPrivateFieldGet(this, _UsuarioArmazenados_usuario, "f").filter(usuarioSalvo => usuarioSalvo.id !== id), "f");
        return usuarios;
    }
    buscaPorID(id) {
        const possivelUsuarios = __classPrivateFieldGet(this, _UsuarioArmazenados_usuario, "f").find(usuarioSalvo => usuarioSalvo.id === id);
        if (!possivelUsuarios) {
            throw new Error('Usuario Não Encontrado =/');
        }
        return possivelUsuarios;
    }
    get Usuarios() {
        return __classPrivateFieldGet(this, _UsuarioArmazenados_usuario, "f");
    }
};
exports.UsuarioArmazenados = UsuarioArmazenados;
_UsuarioArmazenados_usuario = new WeakMap();
exports.UsuarioArmazenados = UsuarioArmazenados = __decorate([
    (0, common_1.Injectable)()
], UsuarioArmazenados);
//# sourceMappingURL=usuario.dm.js.map