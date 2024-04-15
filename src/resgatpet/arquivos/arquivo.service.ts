import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { ARQUIVOS } from './arquivo.entity';

@Injectable()
export class arquivoService {
  arquivos = [];  
  
  async SalvarDados(file: Express.Multer.File, req: Request) {
    const arquivo = new ARQUIVOS();
    arquivo.NOME = file.filename;
    arquivo.CONTENLENGTH = file.size;
    arquivo.CONTENTTYPE = file.mimetype;
    arquivo.URL = `${file.filename}`;

    this.arquivos.push(arquivo);
    return arquivo.URL;
  }

  async ValidaArquivo(nome: string){
    const possivelArquivo = this.arquivos.find(
      file => file.fileName === nome
    );
    return(possivelArquivo!==undefined)
  }
}