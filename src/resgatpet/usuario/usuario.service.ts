import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { RetornoCadastroDTO, RetornoObjDTO } from "../dto/retorno.dto";
import { ListaUsuarioDTO } from "../dto/usuario/listaUsuario.dto";
import { UsuarioDTO } from "../dto/usuario/usuario.dto";
import { Usuario } from './usuario.entity'
import { v4 as uuid } from 'uuid'
import { AtualizarUsuarioDTO } from "../dto/usuario/atualizarUsuario.dto";
import { Login } from "../login/login.entity";

@Injectable()
export class UsuarioService {
    #usuario: Usuario[] = [];

    constructor(
        @Inject('USUARIO_REPOSITORY')
        private usuarioRepository: Repository<Usuario>,
        private readonly usuarioService: Usuario,
        @Inject('LOGIN_REPOSITORY')
        private loginRepository: Repository<Login>,  
        private readonly loginService: Login
    ) { }

    async listar(): Promise<ListaUsuarioDTO[]> {
        var usuarioListadas = await this.usuarioRepository.find();
        return usuarioListadas.map(
            usuario => new ListaUsuarioDTO(
                usuario.ID,
                usuario.NOMECOMPLETO,
                usuario.CPF_CNPJ,
                usuario.TELEFONE,
                usuario.EMAIL,
                usuario.SENHA,
                usuario.FOTO,
                usuario.LEVEL,
                usuario.LOGIN
            ))
    }

    async inserir(dados: UsuarioDTO): Promise<RetornoCadastroDTO> {
        let usuario = new Usuario();
        // let login = await this.usuarioService.inserir(dados.filme);
        usuario.ID = uuid();
        usuario.NOMECOMPLETO = dados.NOMECOMPLETO;
        usuario.CPF_CNPJ = dados.CPF_CNPJ;
        usuario.TELEFONE = dados.TELEFONE
        usuario.EMAIL = dados.EMAIL
        usuario.SENHA = dados.SENHA
        usuario.FOTO = dados.FOTO
        usuario.LEVEL = dados.LEVEL
        // usuario.LOGIN = await this.loginService.localizarID(login.id)

        return this.usuarioRepository.save(usuario)
            .then((result) => {
                return <RetornoCadastroDTO>{
                    id: usuario.ID,
                    message: "Usuario Cadastrado !"
                };
            })
            .catch((error) => {
                return <RetornoCadastroDTO>{
                    id: "",
                    message: "Houve um erro ao cadastrar." + error.message
                };
            })
    }

    localizarID(ID: string): Promise<Usuario> {
        return this.usuarioRepository.findOne({
            where: {
                ID,
            },
        });
    }

    async remove(id: string): Promise<RetornoObjDTO> {
        const usuario = await this.localizarID(id);

        return this.usuarioRepository.remove(usuario)
            .then((result) => {
                return <RetornoObjDTO>{
                    return: usuario,
                    message: "Usuario excluido !"
                };
            })
            .catch((error) => {
                return <RetornoObjDTO>{
                    return: usuario,
                    message: "Houve um erro ao excluir." + error.message
                };
            });
    }

    async alterar(id: string, dados: AtualizarUsuarioDTO): Promise<RetornoCadastroDTO> {
        const usuario = await this.localizarID(id);

        Object.entries(dados).forEach(
            async ([chave, valor]) => {
                if (chave === 'id') {
                    return;
                }

                usuario[chave] = valor;
            }
        )

        return this.usuarioRepository.save(usuario)
            .then((result) => {
                return <RetornoCadastroDTO>{
                    id: usuario.ID,
                    message: "Usuario alterado !"
                };
            })
            .catch((error) => {
                return <RetornoCadastroDTO>{
                    id: "",
                    message: "Houve um erro ao alterar." + error.message
                };
            });
    }

    async validarLogin(email: string, senha: string): Promise<RetornoObjDTO> {
        const usuario = this.buscarPorEmail(email);
        var objRetorno;
        if (usuario)
            objRetorno [usuario, usuario.login(senha)];

            return <RetornoObjDTO>{
                message: objRetorno[1] ? 'Login Efetuado0' : 'Usuario ou senha Ivalidos',
                return: objRetorno[1] ? objRetorno[0] : null
            }
    }

    async validaEmail(email: string) {
        const possivelUsuario = this.#usuario.find(
            (usuario) => usuario.EMAIL === email,
        );
        return possivelUsuario !== undefined;
    }

    async buscarPorEmail(email: string) {
        const possivelUsuario = this.#usuario.find(
            usuarios => usuarios.EMAIL === email
        );
        return possivelUsuario;
    }
}
