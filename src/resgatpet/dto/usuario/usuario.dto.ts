import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailUnico } from "src/resgatpet/validacao/validacaoEmail";
import { SenhaForte } from "src/resgatpet/validacao/validacaoSenha";


export class UsuarioDTO {
    
    @IsString()
    @IsNotEmpty({message: "Nome Não pode ser vazio"})
    @ApiProperty({
        example: 'Roberto Silva',
        description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
    })
    nome: string;

    @IsString()
    @IsNotEmpty({message: "CPF ou CNPJ não pode ser vazio"})
    @ApiProperty({
        example: '00000000000',
        description: `o CPF ou CNPJ é usado para identificação pessoal`,
    })
    cpf_cnpj: string;

    @IsString()
    @IsNotEmpty({message: "Telefone não pode ser vazio"})
    @ApiProperty({
        example: '000000000',
        description: `O telefone pode ser usado para se comunicar com o usuário.`,
    })
    telefone: string;

    @IsString()
    @IsNotEmpty({message: "Email não pode ser vazio"})
    @EmailUnico({ message: 'O email informado já existe' })
    @ApiProperty({
        example: 'teste@teste.com',
        description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
    })
    email: string;

    @IsString()
    @MinLength(6,{message: "Senha precisa ter minimo 6 digitos"})
    @SenhaForte({message: "Senha Muito Fraca"})    
    @IsNotEmpty({message: "Senha Não pode ser vazio"})
    @ApiProperty({
        example: 'Asd@444555666',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    })
    senha: string;
}
