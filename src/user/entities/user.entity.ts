import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"USER"})
export class User {

    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column()
    login:string;

    @Column()
    password:string;

}
