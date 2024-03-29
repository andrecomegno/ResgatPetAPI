import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Login {
    @PrimaryColumn()
    ID: string;

    @Column({length: 255})
    EMAIL: string;

    @Column({length: 255})
    SENHA: string;
}