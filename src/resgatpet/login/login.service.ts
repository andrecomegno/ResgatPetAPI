import { Inject, Injectable } from "@nestjs/common";
import { RetornoCadastroDTO } from "../dto/retorno.dto";
import { LoginDTO } from "../dto/login/login.dto";
import { v4 as uuid } from 'uuid'
import { Login } from "./login.entity";
import { Repository } from "typeorm";

@Injectable()
export class LoginService {

    constructor(
        @Inject('LOGIN_REPOSITORY')
        private loginRepository: Repository<Login>
    ) { }

    async inserir(dados: LoginDTO): Promise<RetornoCadastroDTO> {
        let login = new Login();
        login.ID = uuid();
        login.EMAIL = dados.EMAIL
        login.SENHA = dados.SENHA

        return this.loginRepository.save(login)
            .then((result) => {
                return <RetornoCadastroDTO>{
                    id: login.ID,
                    message: "Login Cadastrado !"
                };
            })
            .catch((error) => {
                return <RetornoCadastroDTO>{
                    id: "",
                    message: "Houve um erro ao cadastrar." + error.message
                };
            })
    }

    async validarLogin(email: string, senha: string) {
        // const usuario = this.buscarPorEmail(email);
        // if (usuario)
        //     return [usuario, usuario.login(senha)];
        // else
        //     return [null, false]
    }
}