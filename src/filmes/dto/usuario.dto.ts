import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class UsuarioDTO {
    @IsString()
    @IsNotEmpty({message: "Nome Não pode ser vazio"})
    nome: string;

    @IsInt()
    @IsNotEmpty({message: "Senha Não pode ser vazio"})
    senha: string;
}
