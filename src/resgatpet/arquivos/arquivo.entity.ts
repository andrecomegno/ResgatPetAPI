import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { FORMULARIO } from "../formulario/formulario.entity";

@Entity()
export class ARQUIVOS {
    @PrimaryColumn()
    ID: string;

    @Column({ length: 1255 })
    NOME: string;

    @Column('int')
    CONTENLENGTH: number;

    @Column({ length: 1255 })
    CONTENTTYPE: string;

    @Column({ length: 1255 })
    URL: string;

    // ID FORMULARIO
    @OneToMany(() => FORMULARIO, formulario => formulario.ARQUIVOS)
    formularios: FORMULARIO[];
}