import { Column, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { USUARIO } from '../usuario/usuario.entity';
import { ARQUIVOS } from '../arquivos/arquivo.entity';

@Entity()
export class FORMULARIO {
    @PrimaryColumn()
    ID: string;

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
    DATAENTRADA: string; 

    @Column({length: 255})
    DATASAIDA: string; 

    @Column({length: 255})
    STATUS: string; 
    
    // IDUSUARIO
    @ManyToOne(() => USUARIO, usuario => usuario.formularios)
    @JoinColumn({ name: 'IDUSUARIO', referencedColumnName:'ID'})
    USUARIO: USUARIO;

    // IDARQUIVOS
    @ManyToOne(() => ARQUIVOS, arquivos => arquivos.formularios)
    @JoinColumn({ name: 'IDARQUIVOS', referencedColumnName:'ID'})
    ARQUIVOS: ARQUIVOS;
}
