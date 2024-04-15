import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AtualizarFormularioDTO{

    @IsString()
    @IsNotEmpty({message: "Data Saida não pode ser vazio "})
    @ApiPropertyOptional({
        example: '2024-01-01',
        description: `Data saida que foi encaminhado o pet para ONGS.`,
    })
    DATASAIDA: string; 

    @IsString()
    @IsNotEmpty({message: "Status não pode ser vazio "})
    @ApiPropertyOptional({
        example: 'Encaminhado para ONG',
        description: `Status do andamento dos pets.`,
    })
    STATUS: string; 
}