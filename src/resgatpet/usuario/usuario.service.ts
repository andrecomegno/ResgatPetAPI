import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { v4 as uuid } from 'uuid'
import { RetornoCadastroDTO, RetornoObjDTO } from "../dto/retorno.dto";
import { ListaUsuarioDTO } from "../dto/usuario/listaUsuario.dto";
import { UsuarioDTO } from "../dto/usuario/usuario.dto";
import { USUARIO } from './usuario.entity'
import { AtualizarUsuarioDTO } from "../dto/usuario/atualizarUsuario.dto";

@Injectable()
export class UsuarioService {

    constructor(
        @Inject('USUARIO_REPOSITORY')
        private usuarioRepository: Repository<USUARIO>
    ) { }

    async listar(): Promise<ListaUsuarioDTO[]> {
        return this.usuarioRepository.find();
    }

    async inserir(dados: UsuarioDTO): Promise<RetornoCadastroDTO> {
        let usuario = new USUARIO();
        usuario.ID = uuid()
        usuario.NOMECOMPLETO = dados.NOMECOMPLETO
        usuario.CPF_CNPJ = dados.CPF_CNPJ
        usuario.TELEFONE = dados.TELEFONE
        usuario.EMAIL = dados.EMAIL
        usuario.trocaSenha(dados.SENHA)
        // usuario.FOTO = dados.FOTO
        usuario.LEVEL = dados.LEVEL

        return this.usuarioRepository.save(usuario)
            .then((result) => {
                return <RetornoCadastroDTO>{
                    id: usuario.ID,
                    message: "Usuario Cadastrado !",
                    success: true
                };
            })
            .catch((error) => {
                return <RetornoCadastroDTO>{
                    id: "",
                    message: "Houve um erro ao cadastrar." + error.message,
                    success: false
                };
            })
    }

    localizarID(ID: string): Promise<USUARIO> {
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

                if (chave === 'SENHA') {
                    usuario.trocaSenha(chave)
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

    async validarLogin(EMAIL: string, SENHA: string): Promise<RetornoObjDTO> {
        const usuario = await this.buscarPorEmail(EMAIL);

        var objRetorno;
        if (usuario)
            objRetorno = [usuario, usuario.login(SENHA)];

        return <RetornoObjDTO>{
            message: objRetorno[1] ? 'Login Efetuado' : 'Usuario ou Senha Ivalidos !',
            return: objRetorno[1] ? objRetorno : null
        }
    }     

    async validaEmail(EMAIL: string) {
        const possivelUsuario = await this.usuarioRepository.findOne({
            where: {
                EMAIL,
            },
        });
        return (possivelUsuario !== null)
    }

    async buscarPorEmail(EMAIL: string): Promise<USUARIO> {
        return this.usuarioRepository.findOne({
            where: {
                EMAIL,
            },
        });
    }
}
