export class UsuarioEntity {
    id: string;
    nome: string;
    senha: string;

    constructor(id: string, nome: string, senha: string) {
        this.id = id;
        this.nome = nome;
        this.senha = senha;
    }
}
