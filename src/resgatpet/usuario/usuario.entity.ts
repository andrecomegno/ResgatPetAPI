import { Column, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';

@Entity()
export class Usuario {
    @PrimaryColumn()
    ID: string;
    
    @Column({length: 255})
    NOME: string;

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

    // @ManyToOne(() => LOGIN)
    // @JoinColumn({ name: 'IDLOGIN', referencedColumnName:'ID'})
    // LOGIN: LOGIN;
}
