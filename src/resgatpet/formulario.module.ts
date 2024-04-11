import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { FormularioController } from "./formulario/formulario.controller";
import { formularioProvider } from "./formulario/formulario.provider";
import { FormularioService } from "./formulario/formulario.service";

@Module({
    imports: [DatabaseModule],
    controllers:[FormularioController],
    providers: [
        ...formularioProvider,
        FormularioService
    ]
})

export class FormularioModule{}