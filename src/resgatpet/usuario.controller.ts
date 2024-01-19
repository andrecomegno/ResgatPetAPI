import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AtualizarUsuarioDTO } from './dto/atualizarUsuario.dto';
import { UsuarioDTO } from './dto/usuario.dto';
import { UsuarioArmazenados } from './usuario.dm';
import { ListaUsuarioDTO } from './dto/listaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid'
import { LoginUsuarioDTO } from './dto/loginUsuario.dto';

@Controller('usuarios')
export class UsuarioController {

    constructor(private clsUsuarioArmazenados: UsuarioArmazenados){}

    @Get()
    async RetornoUsuarios(){
        const usuarioListados = await this.clsUsuarioArmazenados.Usuarios;
        const listaRetorno = usuarioListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.cpf_cnpj,
                usuario.telefone,
                usuario.email,
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
            dadosUsuario.cpf_cnpj,
            dadosUsuario.telefone,
            dadosUsuario.email,
            dadosUsuario.senha
        )        
            
        this.clsUsuarioArmazenados.AdicionarUsuario(usuario);        
        var retorno={
            id: usuario.id,
            message:'Usuario Criado =)'
        }
        
        return retorno
    }

    @Get('/login')
    async Login(@Body() dadosUsuario: LoginUsuarioDTO){
        var login = this.clsUsuarioArmazenados.validarLogin(dadosUsuario.email, dadosUsuario.senha)
        return{
            usuario: login[1] ? login[0] : null,
            status: login[1],
            message: login[1] ? "Login Efetuado" : "Usuario ou senha invalidos !"
        }
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

