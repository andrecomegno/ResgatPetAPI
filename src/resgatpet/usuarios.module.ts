import { Module } from "@nestjs/common";
import { UsuarioController as UsuarioController } from "./usuario/usuario.controller"; 
import { UsuarioArmazenados as UsuarioArmazenados } from "./usuario/usuario.dm";
import { EmailUnicoValidator } from "./validacao/validacaoEmail";

@Module({
    controllers:[UsuarioController],
    providers: [UsuarioArmazenados, EmailUnicoValidator]
})

export class UsuarioModule{}