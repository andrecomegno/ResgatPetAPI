import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AtualizarUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @IsOptional()
    nome: string;

    @IsInt()
    @IsNotEmpty({message: "CPF ou CNPJ não pode ser vazio"})
    @IsOptional()
    cpf_cnpj: number;

    @IsInt()
    @IsNotEmpty({message: "Telefone não pode ser vazio"})
    @IsOptional()
    telefone: number;

    @IsString()
    @IsNotEmpty({message: "Email não pode ser vazio"})
    @IsOptional()
    email: string;
    
    @IsString()
    @IsNotEmpty({message: "Senha não pode ser vazio"})
    @IsOptional()
    senha: string;

}