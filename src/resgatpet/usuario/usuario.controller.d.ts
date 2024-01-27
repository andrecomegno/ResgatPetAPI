import { AtualizarUsuarioDTO } from '../dto/usuario/atualizarUsuario.dto';
import { UsuarioDTO } from '../dto/usuario/usuario.dto';
import { UsuarioArmazenados } from './usuario.dm';
import { ListaUsuarioDTO } from '../dto/usuario/listaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { LoginUsuarioDTO } from '../dto/usuario/loginUsuario.dto';
export declare class UsuarioController {
    private clsUsuarioArmazenados;
    constructor(clsUsuarioArmazenados: UsuarioArmazenados);
    RetornoUsuarios(): Promise<ListaUsuarioDTO[]>;
    CriaUsuario(dadosUsuario: UsuarioDTO): Promise<{
        id: string;
        message: string;
    }>;
    Login(dadosUsuario: LoginUsuarioDTO): Promise<{
        usuario: boolean | UsuarioEntity;
        status: boolean | UsuarioEntity;
        message: string;
    }>;
    atualizaUsuario(id: string, novosDados: AtualizarUsuarioDTO): Promise<{
        usuario: UsuarioEntity;
        message: string;
    }>;
    removeUsuario(id: string): Promise<{
        usuario: UsuarioEntity;
        message: string;
    }>;
}
