import { v4 as uuid } from 'uuid'
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ListaFormularioDTO } from '../dto/formulario/listaFormulario.dto';
import { FormularioArmazenados } from './formulario.dm';
import { FormularioDTO } from '../dto/formulario/formulario.dto';
import { Formulario } from './formulario.entity';
import { AtualizarFormularioDTO } from '../dto/formulario/atualizarFormulario.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FormularioService } from './formulario.service';
import { RetornoCadastroDTO } from '../dto/retorno.dto';

@ApiTags('formulario')
@Controller('formulario')
export class FormularioController {

    constructor(private formularioService: FormularioService){}

    @ApiCreatedResponse({ description: 'Retorna uma lista com os dados cadastrados.'})
    @Get()
    async RetornoFormulario(){
        const formularioListados = await this.formularioService.listar();
        const listaRetorno = formularioListados.map(
            formulario => new ListaFormularioDTO(
                formulario.ID,
                formulario.IMAGEM,
                formulario.ENDERECO,
                formulario.CIDADE,
                formulario.RACA,
                formulario.SEXO,
                formulario.COR,
                formulario.SAUDE,
                formulario.ACESSORIO,
                formulario.USUARIO                
            )
        );
        
        return listaRetorno;
    }

    @ApiCreatedResponse({ description: 'Cria o formulario com base nos dados fornecidos.'})
    @Post()
    async CriaFormulario(@Body() dadosFormulario: FormularioDTO):Promise<RetornoCadastroDTO>{        
        return this.formularioService.inserir(dadosFormulario)
    }

    @ApiCreatedResponse({ description: 'Retorna que houve sucesso ao remover o cadastro do formulário.'})
    @Delete('/:id')
    async removeFormulario(@Param('id') id: string){
        const formularioRemovido = await this.formularioService.remove(id)

        return{
            formulario: formularioRemovido,
            message: 'Formulario removido com Sucesso :S'
        }
    }

    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao trocar a foto.'})
    @ApiResponse({ status: 500, description: 'Retorna que a foto não foi encontrado.'})
    @Post('/foto/:id')
    async atualizaFoto(@Param('id') id: string,@Body() AlteraFotoFormularioDTO){
        const usuario = await this.formularioService.alterar(id,AlteraFotoFormularioDTO)

        return{
            usuario: usuario            
        }
    }
}

