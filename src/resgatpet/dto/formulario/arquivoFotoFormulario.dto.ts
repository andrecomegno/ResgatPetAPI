import { ApiPropertyOptional } from "@nestjs/swagger";

export class AlteraFotoFormularioDTO{
    
    @ApiPropertyOptional({
        example: 'nomearquivo-idarquivo.png',
        description: `Esse campo é responsável pela foto do pet, para ser enviado o dado correto é necessário que seja feito o upload pelo modulo FILES.`,
    })
    foto: string;     
}