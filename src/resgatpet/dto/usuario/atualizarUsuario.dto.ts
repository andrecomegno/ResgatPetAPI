import { IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import { SenhaForte } from "../../validacao/validacao";

export class AtualizarUsuarioDTO{
    
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
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
    @SenhaForte({message: "Senha Muito Fraca"})  
    @IsNotEmpty({message: "Senha não pode ser vazio"})
    @MinLength(6,{message: "Senha precisa ter pelo menos 6 digitos"})
    senha: string;
}