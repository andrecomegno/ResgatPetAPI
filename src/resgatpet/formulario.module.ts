import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { FormularioController } from "./formulario/formulario.controller";
import { formularioProvider } from "./formulario/formulario.provider";
import { FormularioService } from "./formulario/formulario.service";
import { usuarioProvider } from "./usuario/usuario.provider";
import { UsuarioService } from "./usuario/usuario.service";
import { ArquivoService } from "./arquivos/arquivo.service";
import { arquivosProvider } from "./arquivos/arquivo.provider";

@Module({
    imports: [DatabaseModule],
    controllers:[FormularioController],
    providers: [
        ...formularioProvider,
        FormularioService,
        ...usuarioProvider,
        UsuarioService,
        ...arquivosProvider,
        ArquivoService
    ]
})

export class FormularioModule{}