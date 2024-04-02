import { Injectable } from "@nestjs/common";
import { RetornoObjDTO } from "../dto/retorno.dto";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioArmazenados{
    #usuario: Usuario[] = [];  

    AdicionarUsuario(usuario: Usuario){
        this.#usuario.push(usuario);
    }

    atualizaUsuario(id: string, dadosAtualizacao: Partial<Usuario>){
        const usuarios = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                else if(chave == 'senha'){
                    usuarios.trocaSenha(valor);
                    return;
                }
                usuarios[chave] = valor;
            }
        )

        return usuarios;
    }

    validaEmail(email: string) {
        const possivelUsuario = this.#usuario.find(
            (usuario) => usuario.EMAIL === email,
        );
        return possivelUsuario !== undefined;
      }

    buscarPorEmail(email: string){
        const possivelUsuario = this.#usuario.find(
            usuarios => usuarios.EMAIL === email
        );
        return possivelUsuario;
    }

    // async validarLogin(email: string, senha: string): Promise<RetornoObjDTO> {
    //     const usuario = this.buscarPorEmail(email);
    //     var objRetorno;
    //     if (usuario)
    //         objRetorno[usuario, usuario.login(senha)];

    //     return <RetornoObjDTO>{
    //         message: objRetorno[1] ? 'Login Efetuado0' : 'Usuario ou senha Ivalidos',
    //         return: objRetorno[1] ? objRetorno[0] : null
    //     }
    // }

    async removeUsuario(id: string){
        const usuarios = this.buscaPorID(id);

        this.#usuario = this.#usuario.filter(
            usuarioSalvo => usuarioSalvo.ID !== id
        )

        return usuarios;
    }

    private buscaPorID(id: string){
        const possivelUsuarios = this.#usuario.find(
            usuarioSalvo => usuarioSalvo.ID === id
        )

        if (!possivelUsuarios){
            throw new Error('Usuario Não Encontrado =/')
        }
        
        return possivelUsuarios;
    }

    get Usuarios(){        
        return this.#usuario;
    }
}