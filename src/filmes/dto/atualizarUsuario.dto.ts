import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AtualizarUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @IsOptional()
    nome: string;
    
    @IsInt()
    @IsNotEmpty({message: "Senha não pode ser vazio"})
    @IsOptional()
    senha: string;

}