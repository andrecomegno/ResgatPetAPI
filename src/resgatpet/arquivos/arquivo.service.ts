import { Inject, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { Request } from 'express';
import { Repository } from "typeorm";
import { ARQUIVOS } from './arquivo.entity';
import { RetornoCadastroDTO } from '../dto/retorno.dto';

@Injectable()
export class ArquivoService {
  constructor(
    @Inject('ARQUIVOS_REPOSITORY')
    private arquivosRepository: Repository<ARQUIVOS>,
  ) { }

  async SalvarDados(file: Express.Multer.File, req: Request) {
    let arquivo = new ARQUIVOS();
    arquivo.ID = uuid()
    arquivo.NOME = file.filename;
    arquivo.CONTENLENGTH = file.size;
    arquivo.CONTENTTYPE = file.mimetype;
    arquivo.URL = `${file.filename}`;

    return this.arquivosRepository.save(arquivo)
    .then((result) => {
        return <RetornoCadastroDTO>{
            id: arquivo.ID,
            message: "Imagem cadastrada com Sucesso !",
            success: true
        };
    })
    .catch((error) => {
        return <RetornoCadastroDTO>{
            id: "",
            message: "Houve um erro ao cadastrar." + error.message,
            success: false
        };
    })
  }

  async ValidaArquivo(NOME: string): Promise<ARQUIVOS> {
    return this.arquivosRepository.findOne({
      where: {
        NOME,
      },
    });
  }

  localizarID(ID: string): Promise<ARQUIVOS> {
    return this.arquivosRepository.findOne({
      where: {
        ID,
      },
    });
  }
}