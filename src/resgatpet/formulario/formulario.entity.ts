import { Column, PrimaryColumn } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';

@Entity()
export class Formulario {
    @PrimaryColumn()
    ID: string;
    
    @Column({length: 255})
    IMAGEM: string;

    @Column({length: 255})
    ENDERECO: string;

    @Column({length: 255})
    CIDADE: string;

    @Column({length: 255})
    RACA: string;

    @Column({length: 255})
    SEXO: string;

    @Column({length: 255})
    COR: string;

    @Column({length: 255})
    SAUDE: string;

    @Column({length: 255})
    ACESSORIO: string;

    @Column({length: 255})
    USUARIO: string;
}
