import { Module } from '@nestjs/common';
import { ArquivoModule } from './resgatpet/arquivo.module';
import { FormularioModule } from './resgatpet/formulario.module';
import { UsuarioModule } from './resgatpet/usuarios.module';
import { GeneroModule } from './resgatpet/genero/genero.module';

@Module({
  imports: [UsuarioModule, GeneroModule, FormularioModule, ArquivoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
