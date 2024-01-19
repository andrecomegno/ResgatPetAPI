import { IsEmail, MinLength } from "class-validator";

export class LoginUsuarioDTO{
    @IsEmail(undefined, {message:"email é invalido"})
    email: string;

    @MinLength(6,{message: "Senha precisa ter pelo menos 6 digitos"})
    senha:string;
}