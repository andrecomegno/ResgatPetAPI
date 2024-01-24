import { Module } from "@nestjs/common";
import { UsuarioController as UsuarioController } from "./usuario/usuario.controller"; 
import { UsuarioArmazenados as UsuarioArmazenados } from "./usuario/usuario.dm";

@Module({
    controllers:[UsuarioController],
    providers: [UsuarioArmazenados]
})

export class UsuarioModule{}