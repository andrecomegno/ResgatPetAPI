import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UsuarioController } from "./usuario/usuario.controller"; 
import { UsuarioArmazenados } from "./usuario/usuario.dm";
import { EmailUnicoValidator } from "./validacao/validacaoEmail";

@Module({
    imports: [DatabaseModule],
    controllers:[UsuarioController],
    providers: [UsuarioArmazenados, EmailUnicoValidator]
})

export class UsuarioModule{}