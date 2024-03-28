import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../../validacao/validacaoEmail";
import { SenhaForte } from "../../validacao/validacaoSenha";

export class AtualizarUsuarioDTO {
    
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @ApiProperty({
        example: 'Juvenal Oliveira da Silva de Souza',
        description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
    })
    NOME: string;

    @IsString()
    @IsNotEmpty({message: "CPF ou CNPJ não pode ser vazio"})
    @ApiProperty({
        example: '25558878946',
        description: `o CPF ou CNPJ é usado para identificação pessoal`,
    })
    CPF_CNPJ: string;

    @IsString()
    @IsNotEmpty({message: "Telefone não pode ser vazio"})
    @ApiProperty({
        example: '14985554700',
        description: `O telefone pode ser usado para se comunicar com o usuário.`,
    })
    TELEFONE: string;

    @IsString()
    @IsNotEmpty({message: "Email não pode ser vazio"})
    @EmailUnico({ message: 'O email informado já existe' })
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