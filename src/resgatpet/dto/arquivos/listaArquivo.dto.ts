export class ListaArquivosDTO{
    constructor(
        readonly ID: string,
        readonly NOME: string,
        readonly CONTENLENGTH: string,
        readonly CONTENTTYPE: string,
        readonly URL: string,
    ){}
}