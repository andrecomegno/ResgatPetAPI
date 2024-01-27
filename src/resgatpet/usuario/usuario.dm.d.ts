import { UsuarioEntity } from "./usuario.entity";
export declare class UsuarioArmazenados {
    #private;
    AdicionarUsuario(usuario: UsuarioEntity): void;
    atualizaUsuario(id: string, dadosAtualizacao: Partial<UsuarioEntity>): UsuarioEntity;
    buscarPorEmail(email: string): UsuarioEntity;
    validarLogin(email: string, senha: string): (boolean | UsuarioEntity)[];
    removeUsuario(id: string): Promise<UsuarioEntity>;
    private buscaPorID;
    get Usuarios(): UsuarioEntity[];
}
