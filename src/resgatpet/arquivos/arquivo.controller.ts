import { Controller, Post, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ArquivoArmazenados } from "./arquivo.dm";
import { Request } from "express";
import multerConfig from "./multer-config";

@Controller('/arquivos')
export class ArquivoController{
    constructor(private readonly arquivos: ArquivoArmazenados){}

    @Post()
    // ARQUIVO E A CHAVE QUE VAI DENTRO DO KEY NO POSTMAN
    @UseInterceptors(FileInterceptor('arquivo', multerConfig))
    uploadArquivo(@UploadedFile() file: Express.Multer.File, @Req() req: Request){
        return this.arquivos.SalvarDados(file, req)
    }
}