import { Injectable } from "@nestjs/common";
import { Formulario } from "./formulario.entity";

@Injectable()
export class FormularioArmazenados{
    #formularios: Formulario[] = [];  

    AdicionarFormulario(formulario: Formulario){
        this.#formularios.push(formulario);
    }

    atualizaFormulario(id: string, dadosAtualizacao: Partial<Formulario>){
        const formulario = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                formulario[chave] = valor;
            }
        )

        return formulario;
    }

    async removeFormulario(id: string){
        const formulario = this.buscaPorID(id);

        this.#formularios = this.#formularios.filter(
            formularioSalvo => formularioSalvo.ID !== id
        )

        return formulario;
    }

    private buscaPorID(id: string){
        const possivelFormulario = this.#formularios.find(
            formularioSalvo => formularioSalvo.ID === id
        )

        if (!possivelFormulario){
            throw new Error('Formulario Não Encontrado =/')
        }
        
        return possivelFormulario;
    }

    get Formularios(){        
        return this.#formularios;
    }
}