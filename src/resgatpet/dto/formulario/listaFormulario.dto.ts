export class ListaFormularioDTO{
    constructor(
        readonly id: string,
        readonly fotoPet: string,
        readonly endereco: string,
        readonly cidade: string,
        readonly sexo: string,
        readonly raca: string,
        readonly cor: string,
        readonly acessorio: string,
        readonly saude: string
        ){}
}