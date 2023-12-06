import { Module } from '@nestjs/common';
import { UsuarioModule } from './filmes/usuarios.module';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
