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
    IMAGEM: string;

    @IsString()
    @IsNotEmpty({message: "Endereço não pode ser vazio "})
    @ApiProperty({
        example: 'Rua Lopes 1734',
        description: `esse endereço deve ser o mais claro possível para que seja facilitada a busca ao animal.`,
    })
    ENDERECO: string;

    @IsString()
    @IsNotEmpty({message: "Cidade não pode ser vazio "})
    @ApiProperty({
        example: 'Bauru',
        description: `A cidade nos auxilia a saber quais as ONGs mais próximas.`,
    })
    CIDADE: string;

    @IsString()
    @IsNotEmpty({message: "Raça não pode ser vazio "})
    @ApiProperty({
        example: 'Poodle',
        description: `No caso de engano devemos saber a raça do cão em questão.`,
    })
    RACA: string;

    @IsString()
    @IsNotEmpty({message: "Sexo não pode ser vazio "})
    @ApiProperty({
        example: 'Macho',
        description: `Mais um termo para facilitar a descoberta do cachorro`,
    })
    SEXO: string;

    @IsString()
    @IsNotEmpty({message: "Cor não pode ser vazio "})
    @ApiProperty({
        example: 'Branco',
        description: `Informar a cor do cachorro perdido.`,
    })
    COR: string;

    @IsString()
    @IsNotEmpty({message: "Saude não pode ser vazio "})
    @ApiProperty({
        example: 'Ferido',
        description: `Nos mostre o estado do cachorro para urgência.`,
    })
    SAUDE: string;

    @IsString()
    @IsNotEmpty({message: "Acessorio não pode ser vazio "})
    @ApiPropertyOptional({
        example: 'Coleira',
        description: `O cachorro pode ou não conter um acessório, então nos informe caso tenha.`,
    })
    ACESSORIO: string;

    @IsString()
    @IsNotEmpty({message: "Data Entrada não pode ser vazio "})
    @ApiPropertyOptional({
        example: '2024-01-01',
        description: `Data entrada que foi encontrado  o pet.`,
    })
    DATAENTRADA: string; 

    @IsString()
    @IsNotEmpty({message: "Status não pode ser vazio "})
    @ApiPropertyOptional({
        example: 'Encaminhado para ONG',
        description: `Status do andamento dos pets.`,
    })
    STATUS: string; 

    @IsString()
    @IsNotEmpty({message: "ID Usuario não pode ser vazio "})
    @ApiProperty({
        example: '1ghjk234312dhuiyhquhu12',
        description: `ID Usuario que encontrou o Pet.`,
    })
    USUARIO: string;
}