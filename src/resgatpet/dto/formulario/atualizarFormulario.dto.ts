import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AtualizarFormularioDTO{

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '<Foto do animal>',
        description: `A foto será enviada para a ONG com o objetivo de identificar o animal.`,
    })
    fotoPet: string;

    @IsString()
    @IsNotEmpty({message: "Endereço não pode ser vazio"})
    @ApiProperty({
        example: 'Avenida exemplo quadra 6 próximo à loja N',
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
        example: 'Pastor alemão',
        description: `No caso de engano devemos saber a raça do cão em questão.`,
    })
    raca: string;

    @IsString()
    @IsNotEmpty({message: "Sexo não pode ser vazio"})
    @ApiProperty({
        example: 'Macho ou Fêmea',
        description: `Mais um termo para facilitar a descoberta do cachorro`,
    })
    sexo: string;

    @IsString()
    @IsNotEmpty({message: "Cor não pode ser vazio"})
    @ApiProperty({
        example: 'Caramelo',
        description: `Informar a cor do cachorro perdido.`,
    })
    cor: string;

    @IsString()
    @IsNotEmpty({message: "Saude não pode ser vazio"})
    @ApiProperty({
        example: 'doente',
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
        example: 'Ronaldo de Souza',
        description: `Usuario que encontrou o Pet.`,
    })
    usuario: string;
}