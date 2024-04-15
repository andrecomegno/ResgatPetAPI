import { Module } from "@nestjs/common";
import { ArquivoController } from "./arquivos/arquivo.controller";
import { arquivoService } from "./arquivos/arquivo.service";

@Module({
    controllers:[ArquivoController],
    providers:[arquivoService]
})

export class ArquivoModule{}