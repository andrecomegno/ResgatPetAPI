import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AtualizarUsuarioDTO } from '../dto/usuario/atualizarUsuario.dto';
import { UsuarioDTO } from '../dto/usuario/usuario.dto';
import { ListaUsuarioDTO } from '../dto/usuario/listaUsuario.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsuarioService } from './usuario.service';
import { RetornoCadastroDTO, RetornoObjDTO } from '../dto/retorno.dto';
import { LoginUsuarioDTO } from '../dto/usuario/loginUsuario.dto';

@ApiTags('usuario')
@Controller('usuarios')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService){}

    @ApiResponse({ status: 200, description: 'Retorna os usuários cadastrados.'})
    @Get()
    async RetornoUsuarios(){
        const usuarioListados = await this.usuarioService.listar();
        const listaRetorno = usuarioListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.ID,
                usuario.NOMECOMPLETO,
                usuario.CPF_CNPJ,
                usuario.TELEFONE,
                usuario.EMAIL,
                usuario.SENHA,
                // usuario.FOTO,
                usuario.LEVEL
            )
        );
        
        return listaRetorno;
    }

    @ApiCreatedResponse({ status: 200, description: 'Retorna que houve sucesso ao cadastrar o usuário e retorna o ID criado.'})
    @Post()
    async CriaUsuario(@Body() dadosUsuario: UsuarioDTO):Promise<RetornoCadastroDTO>{
        return this.usuarioService.inserir(dadosUsuario)
    }

    @ApiResponse({ status: 200, description: 'Retorna se houve sucesso no login. O retorno "Status" diz se houve sucesso ou não.'})
    @Post('/login')
    async Login(@Body() dadosUsuario: LoginUsuarioDTO): Promise<RetornoObjDTO>{
        return this.usuarioService.validarLogin( dadosUsuario.EMAIL,dadosUsuario.SENHA)
    }

    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao alterar o usuário.'})
    @ApiResponse({ status: 500, description: 'Retorna que o usuário não foi encontrado.'})
    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizarUsuarioDTO){
        const usuarioAtualizado = await this.usuarioService.alterar(id, novosDados)

        return{
            usuario: usuarioAtualizado,
            message: 'Usuario Atualizado com Sucesso ! ;)',
            status:200
        }
    }

    @ApiCreatedResponse({ status: 200, description: 'Retorna que houve sucesso ao remover o usuário.'})
    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.usuarioService.remove(id)

        return{
            usuario: usuarioRemovido,
            message: 'Usuario removido com Sucesso :S',
            status:200
        }
    }

    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao trocar a foto.'})
    @ApiResponse({ status: 500, description: 'Retorna que a foto não foi encontrado.'})
    @Post('/foto/:id')
    async atualizaFoto(@Param('id') id: string,@Body() AlteraFotoUsuarioDTO){
        const usuario = await this.usuarioService.alterar(id,AlteraFotoUsuarioDTO)

        return{
            usuario: usuario,
            status:200
        }
    }
}

