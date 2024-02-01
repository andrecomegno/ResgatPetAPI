import { Module } from "@nestjs/common";
import { ArquivoController } from "./arquivos/arquivo.controller";
import { ArquivoArmazenados } from "./arquivos/arquivo.dm";

@Module({
    controllers:[ArquivoController],
    providers:[ArquivoArmazenados]
})

export class ArquivoModule{}