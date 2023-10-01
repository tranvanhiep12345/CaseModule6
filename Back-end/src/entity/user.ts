import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Restaurant} from "./restaurant";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    name: string;

    @Column({type: 'varchar'})
    phone: string

    @Column({type: 'varchar'})
    email: string

    @Column({type: 'varchar'})
    password: string

    @Column({type: 'varchar'})
    role: string

    @Column({type: 'varchar', nullable: true})
    status: string

    @OneToMany(() => Restaurant, (userObj) => userObj.user)
    restaurant: Restaurant

}
