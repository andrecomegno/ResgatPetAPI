import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class UsuarioDTO {
    @IsString()
    @IsNotEmpty({message: "Nome Não pode ser vazio"})
    nome: string;

    @IsInt()
    @IsNotEmpty({message: "CPF ou CNPJ não pode ser vazio"})
    cpf_cnpj: number;

    @IsInt()
    @IsNotEmpty({message: "Telefone não pode ser vazio"})
    telefone: number;

    @IsString()
    @IsNotEmpty({message: "Email não pode ser vazio"})
    email: string;

    @IsString()
    @IsNotEmpty({message: "Senha Não pode ser vazio"})
    senha: string;
}
