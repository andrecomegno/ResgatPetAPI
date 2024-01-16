export class ListaUsuarioDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly cpf_cnpj: number,
        readonly telefone: number,
        readonly email: string,
        readonly senha: string
        ){}
}