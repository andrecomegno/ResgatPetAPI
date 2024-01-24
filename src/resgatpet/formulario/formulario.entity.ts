export class FormularioEntity {
    id: string;
    fotoPet: string;
    endereco: string;
    cidade: string;
    sexo: string;
    raca: string;
    cor: string;
    acessorio: string;
    saude: string;

    constructor(id: string, fotoPet: string, endereco: string, cidade: string, sexo: string, raca: string, cor: string, acessorio: string, saude: string,) {
        this.id = id;
        this.fotoPet = fotoPet;
        this.endereco = endereco;
        this.cidade = cidade;
        this.sexo = sexo;
        this.raca = raca;
        this.cor = cor;
        this.acessorio = acessorio;
        this.saude = saude;
    }
}
