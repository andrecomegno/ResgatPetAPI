import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../../validacao/validacaoEmail";
import { SenhaForte } from "../../validacao/validacaoSenha";

export class UsuarioDTO {
    
    @IsString()
    @IsNotEmpty({message: "Por favor, preencha todos os campos. "})
    @ApiProperty({
        example: 'Roberto Silva',
        description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
    })
    NOMECOMPLETO: string;

    @IsString()
    @IsNotEmpty({message: "Por favor, preencha todos os campos. "})
    @ApiProperty({
        example: '00000000000',
        description: `o CPF ou CNPJ é usado para identificação pessoal`,
    })
    CPF_CNPJ: string;

    @IsString()
    @IsNotEmpty({message: "Por favor, preencha todos os campos. "})
    @ApiProperty({
        example: '000000000',
        description: `O telefone pode ser usado para se comunicar com o usuário.`,
    })
    TELEFONE: string;

    @IsString()
    @IsNotEmpty({message: "Por favor, preencha todos os campos. "})
    @EmailUnico({message: 'O E-Mail informado já existe. ' })
    @ApiProperty({
        example: 'teste@teste.com',
        description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
    })
    EMAIL: string;

    @IsString()
    @IsNotEmpty({message: "Por favor, preencha todos os campos. "})
    @MinLength(6,{message: "Senha precisa ter minimo 6 digitos. "})
    @SenhaForte({message: "Senha Muito Fraca. "})    
    @ApiProperty({
        example: 'Asd@444555666',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    })
    SENHA: string;

    @IsOptional()
    @ApiProperty({
        example: 'nomearquivo-idarquivo.png',
        description: `Esse campo é responsável pela foto do usuário, para ser enviado o dado correto é necessário que seja feito o upload pelo modulo FILES.`,
    })
    FOTO: string;

    @IsString()
    @IsNotEmpty({message: "Level NULL. "})
    @ApiProperty({
        example: 'level 1',
        description: `Esse campo é responsável pela nivel de acesso ao usuário e ONG.`,
    })
    LEVEL: string;

}
