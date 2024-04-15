import { Inject, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { Request } from 'express';
import { Repository } from "typeorm";
import { ARQUIVOS } from './arquivo.entity';
import { ArquivosDTO } from '../dto/arquivos/arquivo.dto';

@Injectable()
export class ArquivoService {
  constructor(
    @Inject('ARQUIVOS_REPOSITORY')
    private arquivosRepository: Repository<ARQUIVOS>,
  ) { }
  arquivos = [];

  async SalvarDados(file: Express.Multer.File, req: Request) {
    let arquivo = new ARQUIVOS();
    arquivo.ID = uuid()
    arquivo.NOME = file.filename;
    arquivo.CONTENLENGTH = file.size;
    arquivo.CONTENTTYPE = file.mimetype;
    arquivo.URL = `${file.filename}`;

    this.arquivos.push(arquivo);
    return arquivo.URL;
  }

  async ValidaArquivo(nome: string) {
    const possivelArquivo = this.arquivos.find(
      file => file.fileName === nome
    );
    return (possivelArquivo !== undefined)
  }

  localizarID(ID: string): Promise<ARQUIVOS> {
    return this.arquivosRepository.findOne({
      where: {
        ID,
      },
    });
  }
}