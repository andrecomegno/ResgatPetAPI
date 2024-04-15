import { Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Request } from "express";
import multerConfig from "./multer-config";
import { ArquivoService } from "./arquivo.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('arquivos')
@Controller('/arquivos')
export class ArquivoController{
    constructor(private readonly arquivos: ArquivoService){}

    @Post()
    // ARQUIVO E A CHAVE QUE VAI DENTRO DO KEY NO POSTMAN
    @UseInterceptors(FileInterceptor('arquivo', multerConfig))
    async uploadArquivo(@UploadedFile() file: Express.Multer.File, @Req() req: Request){
        var arquivo = await this.arquivos.SalvarDados(file, req);
        return {nomeArquivo: arquivo}
        // return this.arquivos.SalvarDados(file, req);
    }

    @Get(':imgpath')
    retornaArquivo(@Param('imgpath') Image, @Res() res){
        return res.sendFile(Image,{root: './upload/files'})
    }
}