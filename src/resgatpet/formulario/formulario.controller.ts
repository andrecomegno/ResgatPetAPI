import { v4 as uuid } from 'uuid'
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ListaFormularioDTO } from '../dto/formulario/listaFormulario.dto';
import { FormularioArmazenados } from './formulario.dm';
import { FormularioDTO } from '../dto/formulario/formulario.dto';
import { FormularioEntity } from './formulario.entity';
import { AtualizarFormularioDTO } from '../dto/formulario/atualizarFormulario.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('formulario')
@Controller('formulario')
export class FormularioController {

    constructor(private clsFormularioArmazenados: FormularioArmazenados){}

    @ApiCreatedResponse({ description: 'Retorna uma lista com os dados cadastrados.'})
    @Get()
    async RetornoFormulario(){
        const formularioListados = await this.clsFormularioArmazenados.Formularios;
        const listaRetorno = formularioListados.map(
            formulario => new ListaFormularioDTO(
                formulario.id,
                formulario.fotoPet,
                formulario.endereco,
                formulario.cidade,
                formulario.raca,
                formulario.sexo,
                formulario.cor,
                formulario.saude,
                formulario.acessorio,
                formulario.usuario                
            )
        );
        
        return listaRetorno;
    }

    @ApiCreatedResponse({ description: 'Cria o formulario com base nos dados fornecidos.'})
    @Post()
    async CriaFormulario(@Body() dadosFormulario: FormularioDTO){
        var formulario = new FormularioEntity(
            uuid(),
            dadosFormulario.fotoPet,
            dadosFormulario.endereco,
            dadosFormulario.cidade,
            dadosFormulario.raca,
            dadosFormulario.sexo,            
            dadosFormulario.cor,
            dadosFormulario.saude,
            dadosFormulario.acessorio,
            dadosFormulario.usuario
        )        
            
        this.clsFormularioArmazenados.AdicionarFormulario(formulario);        
        var retorno={
            id: formulario.id,
            message:'Formulario Criado =)'
        }
        
        return retorno
    }

    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao alterar o usuário.'})
    @ApiResponse({ status: 500, description: 'Retorna que o usuário não foi encontrado.'})
    @Put('/:id')
    async atualizaFormulario(@Param('id') id: string, @Body() novosDados: AtualizarFormularioDTO){
        const formularioAtualizado = await this.clsFormularioArmazenados.atualizaFormulario(id, novosDados)

        return{
            formulario: formularioAtualizado,
            message: 'Formulario Atualizado com Sucesso ! ;)'
        }
    }

    @ApiCreatedResponse({ description: 'Retorna que houve sucesso ao remover o cadastro do formulário.'})
    @Delete('/:id')
    async removeFormulario(@Param('id') id: string){
        const formularioRemovido = await this.clsFormularioArmazenados.removeFormulario(id)

        return{
            formulario: formularioRemovido,
            message: 'Formulario removido com Sucesso :S'
        }
    }

    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao trocar a foto.'})
    @ApiResponse({ status: 500, description: 'Retorna que a foto não foi encontrado.'})
    @Post('/foto/:id')
    async atualizaFoto(@Param('id') id: string,@Body() AlteraFotoFormularioDTO){
        const usuario = await this.clsFormularioArmazenados.atualizaFormulario(id,AlteraFotoFormularioDTO)

        return{
            usuario: usuario            
        }
    }
}

