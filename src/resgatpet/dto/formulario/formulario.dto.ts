import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class FormularioDTO {

    @IsString()
    @IsOptional()
    fotoPet: string;

    @IsString()
    @IsNotEmpty({message: "Endereço não pode ser vazio"})
    endereco: string;

    @IsString()
    @IsNotEmpty({message: "Cidade não pode ser vazio"})
    cidade: string;

    @IsString()
    @IsNotEmpty({message: "Sexo não pode ser vazio"})
    sexo: string;

    @IsString()
    @IsNotEmpty({message: "Raça não pode ser vazio"})
    raca: string;

    @IsString()
    @IsNotEmpty({message: "Cor não pode ser vazio"})
    cor: string;

    @IsString()
    @IsNotEmpty({message: "Acessorio não pode ser vazio"})
    acessorio: string;

    @IsString()
    @IsNotEmpty({message: "Saude não pode ser vazio"})
    saude: string;
}