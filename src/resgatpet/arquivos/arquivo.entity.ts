import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ARQUIVOS{
    @PrimaryColumn()
    ID: number;

    @Column({ length: 1255 })
    NOME: string;

    @Column('int')
    CONTENLENGTH: number;

    @Column({ length: 1255 })
    CONTENTTYPE: string;

    @Column({ length: 1255 })
    URL: string;
}