import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UsuarioController } from "./usuario/usuario.controller"; 
import { UsuarioArmazenados } from "./usuario/usuario.dm";
import { usuarioProvider } from "./usuario/usuario.provider";
import { UsuarioService } from "./usuario/usuario.service";
import { EmailUnicoValidator } from "./validacao/validacaoEmail";

@Module({
    imports: [DatabaseModule],
    controllers:[UsuarioController],
    providers: [
        ...usuarioProvider, 
        UsuarioService, UsuarioArmazenados, EmailUnicoValidator
    ]
})

export class UsuarioModule{}