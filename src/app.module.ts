import { Module } from '@nestjs/common';
import { FormularioModule } from './resgatpet/formulario.module';
import { UsuarioModule } from './resgatpet/usuarios.module';

@Module({
  imports: [UsuarioModule, FormularioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
