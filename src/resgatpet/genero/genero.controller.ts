import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RetornoCadastroDTO, RetornoObjDTO } from "../dto/retorno.dto";
import { AlterarGeneroDTO } from "./dto/atualizaGenero.dto";
import { CriarGeneroDTO } from "./dto/criaGenero.dto";
import { GENERO } from "./genero.entity";
import { GeneroService } from "./genero.service";

@Controller('/genero')
export class GeneroController{
    constructor(private readonly generoService: GeneroService){

    }

    @Get('listar')
    async listar(): Promise<GENERO[]>{
        return this.generoService.listar()
    }

    @Post('')
    async criarGenero(@Body() dados: CriarGeneroDTO): Promise<RetornoCadastroDTO>{
        return this.generoService.Inserir(dados)
    }

    @Put(':id')
    async alterarGenero(@Body() dados: AlterarGeneroDTO, @Param('id') id: string): Promise<RetornoCadastroDTO>{
        return this.generoService.Alterar(id,dados)
    }

    @Get(':id')
    async listarID(@Param('id') id: string): Promise<GENERO> {
        return this.generoService.localizarID(id)
    }

    @Delete(':id')
    async removerGenero(@Param('id') id: string): Promise<RetornoObjDTO> {
        return this.generoService.Remover(id)
    }
}