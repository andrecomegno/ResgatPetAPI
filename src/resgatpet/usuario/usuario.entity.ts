import { Column, OneToMany, PrimaryColumn } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import * as bcrypt from 'bcrypt'
import { FORMULARIO } from '../formulario/formulario.entity';

@Entity()
export class USUARIO {
    @PrimaryColumn()
    ID: string;
    
    @Column({length: 255})
    NOMECOMPLETO: string;

    @Column({length: 255})
    CPF_CNPJ: string;

    @Column({length: 255})
    TELEFONE: string;

    @Column({length: 255})
    EMAIL: string;

    @Column({length: 255})
    SENHA: string;

    // @Column({length: 255})
    // FOTO: string;

    @Column({length: 255})
    LEVEL: string;

    // ID FORMULARIO
    @OneToMany(() => FORMULARIO, formulario => formulario.USUARIO)
    formularios: FORMULARIO[];

    trocaSenha(SENHA){
        const saltOrRounds=10
        this.SENHA = bcrypt.hashSync(SENHA,saltOrRounds)
    }
    
    login(SENHA){
        return bcrypt.compareSync(SENHA,this.SENHA)
    }
}
