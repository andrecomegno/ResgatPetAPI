import { Module } from '@nestjs/common';
import { UsuarioModule } from './resgatpet/usuarios.module';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
