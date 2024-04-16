import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        // type: 'mysql',
        // host: '50.116.112.16',
        // port: 3306,
        // username: 'vitali04_resgatpet',
        // password: 'resgatpet4',
        // database: 'vitali04_resgatpet',
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'resgatpet',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
        connectTimeout: 15000, // Tempo limite de 15 segundos (em milissegundos)
      });
      
      return dataSource.initialize();
    },
  },
];