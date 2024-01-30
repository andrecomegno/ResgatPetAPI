import { ApiProperty } from "@nestjs/swagger";
import { ApiPropertyOptional } from "@nestjs/swagger/dist";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class FormularioDTO {

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'foto.jpg',
        description: `A foto será enviada para a ONG com o objetivo de identificar o animal.`,
    })
    fotoPet: string;

    @IsString()
    @IsNotEmpty({message: "Endereço não pode ser vazio"})
    @ApiProperty({
        example: 'Rua Lopes 1734',
        description: `esse endereço deve ser o mais claro possível para que seja facilitada a busca ao animal.`,
    })
    endereco: string;

    @IsString()
    @IsNotEmpty({message: "Cidade não pode ser vazio"})
    @ApiProperty({
        example: 'Bauru',
        description: `A cidade nos auxilia a saber quais as ONGs mais próximas.`,
    })
    cidade: string;

    @IsString()
    @IsNotEmpty({message: "Raça não pode ser vazio"})
    @ApiProperty({
        example: 'Poodle',
        description: `No caso de engano devemos saber a raça do cão em questão.`,
    })
    raca: string;

    @IsString()
    @IsNotEmpty({message: "Sexo não pode ser vazio"})
    @ApiProperty({
        example: 'Macho',
        description: `Mais um termo para facilitar a descoberta do cachorro`,
    })
    sexo: string;

    @IsString()
    @IsNotEmpty({message: "Cor não pode ser vazio"})
    @ApiProperty({
        example: 'Branco',
        description: `Informar a cor do cachorro perdido.`,
    })
    cor: string;

    @IsString()
    @IsNotEmpty({message: "Saude não pode ser vazio"})
    @ApiProperty({
        example: 'Ferido',
        description: `Nos mostre o estado do cachorro para urgência.`,
    })
    saude: string;

    @IsString()
    @IsNotEmpty({message: "Acessorio não pode ser vazio"})
    @ApiPropertyOptional({
        example: 'Coleira',
        description: `O cachorro pode ou não conter um acessório, então nos informe caso tenha.`,
    })
    acessorio: string;

    @IsString()
    @IsNotEmpty({message: "Usuario não pode ser vazio"})
    @ApiProperty({
        example: 'Juvenal Oliveira da Silva de Souza',
        description: `Usuario que encontrou o Pet.`,
    })
    usuario: string;
}