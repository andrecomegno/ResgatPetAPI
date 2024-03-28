export class ListaUsuarioDTO{
    constructor(
        readonly ID: string,
        readonly NOME: string,
        readonly CPF_CNPJ: string,
        readonly TELEFONE: string,
        readonly EMAIL: string,
        readonly SENHA: string,
        readonly FOTO: string,
        readonly LEVEL: string
        ){}
}