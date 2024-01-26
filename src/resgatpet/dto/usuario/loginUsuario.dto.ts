import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginUsuarioDTO{

    @IsNotEmpty({message: "Email não pode ser vazio"})
    @IsEmail(undefined, {message:"email é invalido"})
    @ApiProperty({
        example: 'teste@teste.com',
        description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
    })
    email: string;

    @IsNotEmpty({message: "Senha Não pode ser vazio"})
    @MinLength(6,{message: "Senha precisa ter pelo menos 6 digitos"})
    @ApiProperty({
        example: 'Asd@444555666',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    })
    senha:string;
}