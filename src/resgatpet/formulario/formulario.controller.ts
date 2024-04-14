import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { FormularioDTO } from '../dto/formulario/formulario.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FormularioService } from './formulario.service';
import { RetornoCadastroDTO } from '../dto/retorno.dto';

@ApiTags('formulario')
@Controller('formulario')
export class FormularioController {

    constructor(private formularioService: FormularioService){}

    @ApiCreatedResponse({ description: 'Retorna uma lista com os dados cadastrados.'})
    @Get()
    async Retorno(){
        return this.formularioService.listar();
    }

    @ApiCreatedResponse({ description: 'Cria o formulario com base nos dados fornecidos.'})
    @Post()
    async Criar(@Body() dadosFormulario: FormularioDTO):Promise<RetornoCadastroDTO>{        
        return this.formularioService.inserir(dadosFormulario)
    }

    @ApiCreatedResponse({ description: 'Retorna que houve sucesso ao remover o cadastro do formulário.'})
    @Delete('/:id')
    async Remover(@Param('id') id: string){
        const formularioRemovido = await this.formularioService.remove(id)

        return{
            formulario: formularioRemovido,
            message: 'Formulario Removido com Sucesso !'
        }
    }

    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao trocar a foto.'})
    @ApiResponse({ status: 500, description: 'Retorna que a foto não foi encontrado.'})
    @Post('/foto/:id')
    async AtualizarFoto(@Param('id') id: string,@Body() AlteraFotoFormularioDTO){
        const usuario = await this.formularioService.alterar(id,AlteraFotoFormularioDTO)

        return{
            usuario: usuario            
        }
    }
}

