import { ApiPropertyOptional } from "@nestjs/swagger";

export class AlteraFotoUsuarioDTO{
    
    @ApiPropertyOptional({
        example: 'nomearquivo-idarquivo.png',
        description: `Esse campo é responsável pela foto do usuário, para ser enviado o dado correto é necessário que seja feito o upload pelo modulo FILES.`,
    })
    FOTO: string;     
}