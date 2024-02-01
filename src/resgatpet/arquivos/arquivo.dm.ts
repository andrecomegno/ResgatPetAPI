import { Injectable } from "@nestjs/common";
import { ArquivosEntity } from "./arquivos.entity";
import { Request } from "express";

@Injectable()
export class ArquivoArmazenados{
    #arquivos = [];

    async SalvarDados(file: Express.Multer.File, req: Request){
        const arquivo = new ArquivosEntity();
        arquivo.arquivoNomes = file.filename;
        arquivo.contentLength = file.size;
        arquivo.contentType = file.mimetype;
        // URL INTEIRA
        // arquivo.url = `${req.protocol}://${req.get('host')}/files/${file.filename}`;
        
        // SOMENTE NOME DO ARQUIVO
        arquivo.url = `${file.filename}`;

        this.#arquivos.push(arquivo)
        return arquivo.url;
    }
}