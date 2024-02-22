import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginUsuarioDTO{

    @ApiProperty({
        example: 'Roberto Silva',
        description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
    })
    nome: string;

    @IsNotEmpty({message: "Email não pode ser vazio"})
    @IsEmail(undefined, {message:"email é invalido"})
    @ApiProperty({
        example: 'juvenal_12345@gmail.com',
        description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
    })
    email: string;

    @ApiProperty({
        example: '000000000',
        description: `O telefone pode ser usado para se comunicar com o usuário.`,
    })
    telefone: string;

    @IsNotEmpty({message: "Senha Não pode ser vazio"})
    @MinLength(6,{message: "Senha precisa ter pelo menos 6 digitos"})
    @ApiProperty({
        example: '#@afgtu45',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    })
    senha:string;

    @IsNotEmpty({message: " Level Não pode ser vazio "})
    @ApiProperty({
        example: 'level 1',
        description: `Esse campo é responsável pela nivel de acesso ao usuário e ONG.`,
    })
    level: string; 
}