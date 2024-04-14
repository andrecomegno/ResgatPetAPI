export class ListaFormularioDTO{
    constructor(
        readonly ID: string,
        readonly IMAGEM: string,
        readonly ENDERECO: string,
        readonly CIDADE: string,
        readonly RACA: string,
        readonly SEXO: string,
        readonly COR: string,
        readonly SAUDE: string,
        readonly ACESSORIO: string
    ){}
}