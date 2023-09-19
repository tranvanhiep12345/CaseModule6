import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Restaurant} from "./restaurant";

@Entity()
export class Food {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 255})
    name: string;

    @Column({type: "int"})
    prepTime: number;

    @Column({type: "int"})
    serviceFee: number;

    @Column({type: "int"})
    price: number;

    @Column({type: "int"})
    views: number;

    @Column({type: "varchar", length: 255})
    sale: string;

    @Column({type: "longtext"})
    description: string;

    @Column({type: "varchar", length: 255, nullable: true})
    status: string;

    @Column({type: "varchar", length: 255, nullable: true})
    note: string;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.id)
    restaurant: Restaurant

}
