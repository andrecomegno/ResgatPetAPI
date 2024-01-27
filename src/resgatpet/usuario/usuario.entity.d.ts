export declare class UsuarioEntity {
    id: string;
    nome: string;
    cpf_cnpj: string;
    telefone: string;
    email: string;
    senha: string;
    constructor(id: string, nome: string, cpf_cnpj: string, telefone: string, email: string, senha: string);
    login(senha: any): boolean;
    trocaSenha(senha: any): void;
}
