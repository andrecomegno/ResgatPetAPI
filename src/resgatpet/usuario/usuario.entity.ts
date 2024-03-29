import { Column, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Login } from '../login/login.entity';

@Entity()
export class Usuario {
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

    @Column({length: 255})
    FOTO: string;

    @Column({length: 255})
    LEVEL: string;

    @ManyToOne(
        () => Login,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
    @JoinColumn({ name: 'IDLOGIN', referencedColumnName:'ID'})
    LOGIN: Login;
}
