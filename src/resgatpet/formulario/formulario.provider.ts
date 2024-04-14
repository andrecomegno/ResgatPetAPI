import { DataSource } from 'typeorm';
import { FORMULARIO } from './formulario.entity';

export const formularioProvider = [
  {
    provide: 'FORMULARIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(FORMULARIO),
    inject: ['DATA_SOURCE'],
  },
];