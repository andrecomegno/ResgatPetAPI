import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import { SenhaForte } from "../../validacao/validacao";

export class AtualizarUsuarioDTO{
    
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @ApiProperty({
        example: 'Juvenal Oliveira da Silva de Souza',
        description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
    })
    nome: string;

    @IsString()
    @IsNotEmpty({message: "CPF ou CNPJ não pode ser vazio"})
    @ApiProperty({
        example: '25558878946',
        description: `o CPF ou CNPJ é usado para identificação pessoal`,
    })
    cpf_cnpj: string;

    @IsString()
    @IsNotEmpty({message: "Telefone não pode ser vazio"})
    @ApiProperty({
        example: '14985554700',
        description: `O telefone pode ser usado para se comunicar com o usuário.`,
    })
    telefone: string;

    @IsString()
    @IsNotEmpty({message: "Email não pode ser vazio"})
    @ApiProperty({
        example: 'juvenal_12345@gmail.com',
        description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
    })
    email: string;
    
    @IsString()
    @SenhaForte({message: "Senha Muito Fraca"})  
    @IsNotEmpty({message: "Senha não pode ser vazio"})
    @MinLength(6,{message: "Senha precisa ter pelo menos 6 digitos"})
    @ApiProperty({
        example: '#@afgtu45',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    })
    senha: string;
}