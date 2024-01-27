export class ListaFormularioDTO{
    constructor(
        readonly id: string,
        readonly fotoPet: string,
        readonly endereco: string,
        readonly cidade: string,
        readonly raca: string,
        readonly sexo: string,
        readonly cor: string,
        readonly saude: string,
        readonly acessorio: string,
        readonly usuario: string
    ){}
}