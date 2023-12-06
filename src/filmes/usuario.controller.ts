import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AtualizarUsuarioDTO } from './dto/atualizarUsuario.dto';
import { UsuarioDTO } from './dto/usuario.dto';
import { UsuarioArmazenados } from './usuario.dm';
import { ListaUsuarioDTO } from './dto/listaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid'

@Controller('usuarios')
export class UsuarioController {

    constructor(private clsUsuarioArmazenados: UsuarioArmazenados){}

    @Get()
    async RetornoFilmes(){
        const usuarioListados = await this.clsUsuarioArmazenados.Usuarios;
        const listaRetorno = usuarioListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.senha
            )
        );
        
        return listaRetorno;
    }

    @Post()
    async CriaUsuario(@Body() dadosUsuario: UsuarioDTO){
        var usuario = new UsuarioEntity(
            uuid(),
            dadosUsuario.nome,
            dadosUsuario.senha
        )        
            
        this.clsUsuarioArmazenados.AdicionarUsuario(usuario);        
        var retorno={
            id: usuario.id,
            message:'Usuario Criado =)'
        }
        
        return retorno
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizarUsuarioDTO){
        const usuarioAtualizado = await this.clsUsuarioArmazenados.atualizaUsuario(id, novosDados)

        return{
            usuario: usuarioAtualizado,
            message: 'Usuario Atualizado com Sucesso ! ;)'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.clsUsuarioArmazenados.removeUsuario(id)

        return{
            usuario: usuarioRemovido,
            message: 'Usuario removido com Sucesso :S'
        }
    }
}

