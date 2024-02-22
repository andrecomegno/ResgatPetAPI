import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioArmazenados{
    #usuario: UsuarioEntity[] = [];  

    AdicionarUsuario(usuario: UsuarioEntity){
        this.#usuario.push(usuario);
    }

    atualizaUsuario(id: string, dadosAtualizacao: Partial<UsuarioEntity>){
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
          (usuario) => usuario.email === email,
        );
        return possivelUsuario !== undefined;
      }

    buscarPorEmail(email: string){
        const possivelUsuario = this.#usuario.find(
            usuarios => usuarios.email === email
        );
        return possivelUsuario;
    }

    validarLogin(nome:string, email:string, telefone:string, senha:string, level:string){
        const usuario = this.buscarPorEmail(email);
        if(usuario)
            return [usuario,usuario.login(nome,email,telefone,senha,level)];
        else
            return [null, false]
    }

    async removeUsuario(id: string){
        const usuarios = this.buscaPorID(id);

        this.#usuario = this.#usuario.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        )

        return usuarios;
    }

    private buscaPorID(id: string){
        const possivelUsuarios = this.#usuario.find(
            usuarioSalvo => usuarioSalvo.id === id
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