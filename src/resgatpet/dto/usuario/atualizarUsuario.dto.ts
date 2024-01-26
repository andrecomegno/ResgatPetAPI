import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import { SenhaForte } from "../../validacao/validacao";

export class AtualizarUsuarioDTO{
    
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @ApiProperty({
        example: 'Roberto Silva',
        description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
    })
    nome: string;

    @IsString()
    @IsNotEmpty({message: "CPF ou CNPJ não pode ser vazio"})
    @ApiProperty({
        example: '(CPF) 000.000.000-00 ou (CNPJ) 00.000.000.0000-00 ',
        description: `o CPF ou CNPJ é usado para identificação pessoal`,
    })
    cpf_cnpj: string;

    @IsString()
    @IsNotEmpty({message: "Telefone não pode ser vazio"})
    @ApiProperty({
        example: '(00)00000-0000',
        description: `O telefone pode ser usado para se comunicar com o usuário.`,
    })
    telefone: string;

    @IsString()
    @IsNotEmpty({message: "Email não pode ser vazio"})
    @ApiProperty({
        example: 'teste@teste.com',
        description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
    })
    email: string;
    
    @IsString()
    @SenhaForte({message: "Senha Muito Fraca"})  
    @IsNotEmpty({message: "Senha não pode ser vazio"})
    @MinLength(6,{message: "Senha precisa ter pelo menos 6 digitos"})
    @ApiProperty({
        example: 'Asfg!4288956',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    })
    senha: string;
}