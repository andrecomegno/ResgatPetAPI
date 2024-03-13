import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { RetornoCadastroDTO, RetornoObjDTO } from "../dto/retorno.dto";
import { AlterarGeneroDTO } from "./dto/atualizaGenero.dto";
import { CriarGeneroDTO } from "./dto/criaGenero.dto";
import { GENERO } from "./genero.entity";
import { v4 as uuid } from 'uuid'

@Injectable()
export class GeneroService{
    constructor(
        @Inject('GENERO_REPOSITORY')
        private generoRepository: Repository<GENERO>,
    ) {}

    async Inserir(dados: CriarGeneroDTO): Promise<RetornoCadastroDTO>{
        let genero = new GENERO();
        genero.ID = uuid();
        genero.NOME = dados.NOME
        genero.DESCRICAO = dados.DESCRICAO

        return this.generoRepository.save(genero).then((result) =>{
            return <RetornoCadastroDTO>{
                id: genero.ID,
                message: 'Genero Cadastrado !'
            }
        })
        .catch((error) =>{
            return <RetornoCadastroDTO>{
                id: '',
                message: 'Houve um erro ao cadastrar. ' + error.message
            }
        })
    }
    
    async Alterar(id: string, dados: AlterarGeneroDTO): Promise<RetornoCadastroDTO> {
        const genero = await this.localizarID(id)

        Object.entries(dados).forEach(
            ([chave, valor]) => {
                if(chave === 'id'){
                    return
                }
                genero[chave] = valor
            }            
        )

        return this.generoRepository.save(genero).then((result) =>{
            return <RetornoCadastroDTO>{
                id: genero.ID,
                message: 'Genero Alterado !'
            }
        })
    }

    async Remover(id: string): Promise<RetornoObjDTO> {
        const genero = await this.localizarID(id)

        return this.generoRepository.remove(genero).then((result) =>{
            return <RetornoObjDTO> {
                return: genero,
                message: 'Genero Excluido !'
            }
        })
        .catch((error) =>{
            return<RetornoObjDTO>{
                return: genero,
                message: 'Houve um erro ao excluir. ' + error.message
            }
        })
    }
    
    localizarID(ID: string): Promise<GENERO> {
        return this.generoRepository.findOne({
            where: {
                ID,
            }
        })
    }

    async listar(): Promise<GENERO[]> {
        return this.generoRepository.find()
    }
}