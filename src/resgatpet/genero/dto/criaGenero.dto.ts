import { IsNotEmpty, IsString } from "class-validator";

export class CriarGeneroDTO{
    @IsString()
    @IsNotEmpty({message: 'Nome não pode ser vazio'})
    NOME: string

    @IsString()
    @IsNotEmpty({message: 'Descrição não pode ser vazio'})
    DESCRICAO: string
}