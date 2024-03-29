import { DataSource } from 'typeorm';
import { Login } from './login.entity';

export const loginProvider = [
  {
    provide: 'LOGIN_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Login),
    inject: ['DATA_SOURCE'],
  },
];