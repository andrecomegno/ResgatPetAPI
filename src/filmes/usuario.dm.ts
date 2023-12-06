import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioArmazenados{
    #filme: UsuarioEntity[] = [];  

    AdicionarUsuario(filmes: UsuarioEntity){
        this.#filme.push(filmes);
    }

    atualizaUsuario(id: string, dadosAtualizacao: Partial<UsuarioEntity>){
        const filme = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                filme[chave] = valor;
            }
        )

        return filme;
    }

    compartilharFilme(id: string): string {
        const filme = this.buscaPorID(id);
        return filme.compartilhar();
    }

    async removeUsuario(id: string){
        const filme = this.buscaPorID(id);

        this.#filme = this.#filme.filter(
            filmeSalvo => filmeSalvo.id !== id
        )

        return filme;
    }

    private buscaPorID(id: string){
        const possivelFilme = this.#filme.find(
            filmeSalvo => filmeSalvo.id === id
        )

        if (!possivelFilme){
            throw new Error('Filme não Encontrado =/')
        }
        
        return possivelFilme;
    }

    get Usuarios(){        
        return this.#filme;
    }
}