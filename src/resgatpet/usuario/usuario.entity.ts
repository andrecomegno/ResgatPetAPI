import * as bcrypt from 'bcrypt'

export class UsuarioEntity {
    id: string;
    nome: string;
    cpf_cnpj: string;
    telefone: string;
    email: string;
    senha: string;
    foto: string

    constructor(id: string, nome: string, cpf_cnpj: string, telefone: string, email: string, senha: string, foto: string) {
        const saltOrRounds = 10;

        this.id = id;
        this.nome = nome;
        this.cpf_cnpj = cpf_cnpj;
        this.telefone = telefone;
        this.email = email;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
        this.foto = foto
    }

    login(senha){
        return bcrypt.compareSync(senha, this.senha);
    }

    trocaSenha(senha){
        const saltOrRounds = 10;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
    }
}
