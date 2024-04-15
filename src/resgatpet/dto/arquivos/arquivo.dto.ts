import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class ArquivosDTO {

    @IsString()
    @IsNotEmpty({message: "Foto não pode ser vazio "})
    @ApiProperty({
        example: 'FOTO PET',
        description: `Nome da foto do pet.`,
    })
    NOME: string;

    @IsInt()
    @IsNotEmpty({message: "Content Length não pode ser vazio "})
    @ApiProperty({
        example: '12mb',
        description: `Tamanho da foto.`,
    })
    CONTENLENGTH: string;

    @IsString()
    @IsNotEmpty({message: "Formato da foto não pode ser vazio "})
    @ApiProperty({
        example: '.PNG',
        description: `exemplo de formato .PNG`,
    })
    CONTENTTYPE: string;

    @IsString()
    @IsNotEmpty({message: "URL não pode ser vazio "})
    @ApiProperty({
        example: 'URL da foto',
        description: `C:/Users/Jorge/Downloads `,
    })
    URL: string;
}