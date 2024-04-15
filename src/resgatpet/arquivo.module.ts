import { Module } from "@nestjs/common";
import { ArquivoController } from "./arquivos/arquivo.controller";
import { ArquivoService } from "./arquivos/arquivo.service";
import { arquivosProvider } from "./arquivos/arquivo.provider";
import { DatabaseModule } from "src/database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers:[ArquivoController],
    providers:[
        ...arquivosProvider,
        ArquivoService
    ]
})

export class ArquivoModule{}