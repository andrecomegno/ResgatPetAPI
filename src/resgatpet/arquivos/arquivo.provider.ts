import { DataSource } from 'typeorm';
import { ARQUIVOS } from './arquivo.entity';

export const arquivosProvider = [
  {
    provide: 'ARQUIVOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ARQUIVOS),
    inject: ['DATA_SOURCE'],
  },
];