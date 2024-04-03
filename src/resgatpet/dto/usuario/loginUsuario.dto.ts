import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { SenhaForte } from "src/resgatpet/validacao/validacaoSenha";

export class LoginUsuarioDTO{
 
    @IsString()
    @IsNotEmpty({message: "Email não pode ser vazio"})
    @ApiProperty({
        example: 'juvenal_12345@gmail.com',
        description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
    })
    EMAIL: string;

    @IsString()
    @SenhaForte({message: "Senha Muito Fraca"})  
    @IsNotEmpty({message: "Senha não pode ser vazio"})
    @MinLength(6,{message: "Senha precisa ter pelo menos 6 digitos"})
    @ApiProperty({
        example: '#@afgtu45',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    })
    SENHA: string;
}