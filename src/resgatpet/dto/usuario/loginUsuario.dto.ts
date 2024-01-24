import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginUsuarioDTO{

    @IsNotEmpty({message: "Email não pode ser vazio"})
    @IsEmail(undefined, {message:"email é invalido"})
    email: string;

    @IsNotEmpty({message: "Senha Não pode ser vazio"})
    @MinLength(6,{message: "Senha precisa ter pelo menos 6 digitos"})
    senha:string;
}