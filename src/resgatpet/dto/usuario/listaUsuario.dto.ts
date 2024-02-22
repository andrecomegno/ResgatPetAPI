export class ListaUsuarioDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly cpf_cnpj: string,
        readonly telefone: string,
        readonly email: string,
        readonly senha: string,
        readonly foto: string,
        readonly level: string
        ){}
}