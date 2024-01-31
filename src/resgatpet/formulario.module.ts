import { Module } from "@nestjs/common";
import { FormularioController as  FormularioController } from "./formulario/formulario.controller";
import { FormularioArmazenados as FormularioArmazenados } from "./formulario/formulario.dm";

@Module({
    controllers:[FormularioController],
    providers: [FormularioArmazenados]
})

export class FormularioModule{}