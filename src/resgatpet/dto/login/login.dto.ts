import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginDTO{

    @IsNotEmpty({message: " Email não pode ser vazio "})
    @IsEmail(undefined, {message:" O email é invalido "})
    @ApiProperty({
        example: 'juvenal_12345@gmail.com',
        description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
    })
    EMAIL: string;

    @IsNotEmpty({message: " Senha Não pode ser vazio "})
    @MinLength(6,{message: " Senha precisa ter pelo menos 6 digitos "})
    @ApiProperty({
        example: '#@afgtu45',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    })
    SENHA:string;

}