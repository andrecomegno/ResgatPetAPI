import { DataSource } from 'typeorm';
import { Formulario } from './formulario.entity';

export const usuarioProvider = [
  {
    provide: 'FORMULARIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Formulario),
    inject: ['DATA_SOURCE'],
  },
];