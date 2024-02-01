import { Module } from '@nestjs/common';
import { ArquivoModule } from './resgatpet/arquivo.module';
import { FormularioModule } from './resgatpet/formulario.module';
import { UsuarioModule } from './resgatpet/usuarios.module';

@Module({
  imports: [UsuarioModule, FormularioModule, ArquivoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
