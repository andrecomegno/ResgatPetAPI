import { Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
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
    async uploadArquivo(@UploadedFile() file: Express.Multer.File, @Req() req: Request){
        var arquivo = await this.arquivos.SalvarDados(file, req);
        return {nomeArquivo: arquivo}
    }

    @Get(':imgpath')
    retornaArquivo(@Param('imgpath') Image, @Res() res){
        return res.sendFile(Image,{root: '/tmp'})
    }
}