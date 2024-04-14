import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AtualizarFormularioDTO{

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'foto.jpg',
        description: `A foto será enviada para a ONG com o objetivo de identificar o animal.`,
    })
    IMAGEM: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty({message: "Endereço não pode ser vazio"})
    @ApiProperty({
        example: 'Rua Lopes 1734',
        description: `esse endereço deve ser o mais claro possível para que seja facilitada a busca ao animal.`,
    })
    ENDERECO: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty({message: "Cidade não pode ser vazio"})
    @ApiProperty({
        example: 'Bauru',
        description: `A cidade nos auxilia a saber quais as ONGs mais próximas.`,
    })
    CIDADE: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty({message: "Raça não pode ser vazio"})
    @ApiProperty({
        example: 'Poodle',
        description: `No caso de engano devemos saber a raça do cão em questão.`,
    })
    RACA: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty({message: "Sexo não pode ser vazio"})
    @ApiProperty({
        example: 'Macho',
        description: `Mais um termo para facilitar a descoberta do cachorro`,
    })
    SEXO: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty({message: "Cor não pode ser vazio"})
    @ApiProperty({
        example: 'Branco',
        description: `Informar a cor do cachorro perdido.`,
    })
    COR: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty({message: "Saude não pode ser vazio"})
    @ApiProperty({
        example: 'Ferido',
        description: `Nos mostre o estado do cachorro para urgência.`,
    })
    SAUDE: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty({message: "Acessorio não pode ser vazio"})
    @ApiPropertyOptional({
        example: 'Coleira',
        description: `O cachorro pode ou não conter um acessório, então nos informe caso tenha.`,
    })
    ACESSORIO: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty({message: "Usuario não pode ser vazio"})
    @ApiProperty({
        example: 'Juvenal Oliveira da Silva de Souza',
        description: `Usuario que encontrou o Pet.`,
    })
    USUARIO: string;
}