import { v4 as uuid } from 'uuid'
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ListaFormularioDTO } from '../dto/formulario/listaFormulario.dto';
import { FormularioArmazenados } from './formulario.dm';
import { FormularioDTO } from '../dto/formulario/formulario.dto';
import { FormularioEntity } from './formulario.entity';
import { AtualizarFormularioDTO } from '../dto/formulario/atualizarFormulario.dto';

@Controller('formulario')
export class FormularioController {

    constructor(private clsFormularioArmazenados: FormularioArmazenados){}

    @Get()
    async RetornoFormulario(){
        const formularioListados = await this.clsFormularioArmazenados.Formularios;
        const listaRetorno = formularioListados.map(
            formulario => new ListaFormularioDTO(
                formulario.id,
                formulario.fotoPet,
                formulario.endereco,
                formulario.cidade,
                formulario.sexo,
                formulario.raca,
                formulario.cor,
                formulario.acessorio,
                formulario.saude
            )
        );
        
        return listaRetorno;
    }

    @Post()
    async CriaFormulario(@Body() dadosFormulario: FormularioDTO){
        var formulario = new FormularioEntity(
            uuid(),
            dadosFormulario.fotoPet,
            dadosFormulario.endereco,
            dadosFormulario.cidade,
            dadosFormulario.sexo,
            dadosFormulario.raca,
            dadosFormulario.cor,
            dadosFormulario.acessorio,
            dadosFormulario.saude
        )        
            
        this.clsFormularioArmazenados.AdicionarFormulario(formulario);        
        var retorno={
            id: formulario.id,
            message:'Formulario Criado =)'
        }
        
        return retorno
    }

    @Put('/:id')
    async atualizaFormulario(@Param('id') id: string, @Body() novosDados: AtualizarFormularioDTO){
        const formularioAtualizado = await this.clsFormularioArmazenados.atualizaFormulario(id, novosDados)

        return{
            formulario: formularioAtualizado,
            message: 'Formulario Atualizado com Sucesso ! ;)'
        }
    }

    @Delete('/:id')
    async removeFormulario(@Param('id') id: string){
        const formularioRemovido = await this.clsFormularioArmazenados.removeFormulario(id)

        return{
            formulario: formularioRemovido,
            message: 'Formulario removido com Sucesso :S'
        }
    }
}

