import { Body, Controller, Post } from "@nestjs/common"
import { ApiResponse, ApiTags } from "@nestjs/swagger"
import { LoginDTO } from "../dto/login/login.dto"
import { LoginService } from "./login.service"


@ApiTags('login')
@Controller('/login')
export class UsuarioController {

    constructor(private clsUsuarioArmazenados: LoginService){}

    @ApiResponse({ status: 200, description: 'Retorna se houve sucesso no login. O retorno "Status" diz se houve sucesso ou não.'})
    @Post('/login')
    async Login(@Body() dadosUsuario: LoginDTO){
        var login = this.clsUsuarioArmazenados.validarLogin( dadosUsuario.EMAIL,dadosUsuario.SENHA)
        return{
            usuario: login[1] ? login[0] : null,
            status: login[1],
            message: login[1] ? "Login Efetuado" : "Usuario ou senha invalidos !"
        }
    }

}






