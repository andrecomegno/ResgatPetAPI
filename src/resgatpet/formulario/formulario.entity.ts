export class FormularioEntity {
    id: string;
    fotoPet: string;
    endereco: string;
    cidade: string;
    raca: string;
    sexo: string;    
    cor: string;
    saude: string;
    acessorio: string;
    usuario: string;    

    constructor(id: string, fotoPet: string, endereco: string, cidade: string, raca: string, sexo: string, cor: string, saude: string, acessorio: string, usuario: string ) {
        this.id = id;
        this.fotoPet = fotoPet;
        this.endereco = endereco;
        this.cidade = cidade;
        this.raca = raca;
        this.sexo = sexo;        
        this.cor = cor;
        this.saude = saude;
        this.acessorio = acessorio;
        this.usuario = usuario;
    }
}
