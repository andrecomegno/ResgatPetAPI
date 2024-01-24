import { Module } from "@nestjs/common";
import { FormularioController as  FormularioController } from "./formulario/formulario.controller";
import { FormularioArmazenados as FormularioArmazenados } from "./formulario/formulario.dm";
import { UsuarioController as UsuarioController } from "./usuario/usuario.controller"; 
import { UsuarioArmazenados as UsuarioArmazenados } from "./usuario/usuario.dm";

@Module({
    controllers:[UsuarioController, FormularioController],
    providers: [UsuarioArmazenados, FormularioArmazenados]
})

export class UsuarioModule{}