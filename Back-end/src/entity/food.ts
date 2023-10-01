import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Restaurant} from "./restaurant";
import {ImageFood} from "./imageFood";

@Entity()
export class Food {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 255})
    name: string;

    @Column({type: "int"})
    prepTime: number;

    @Column({type:"varchar"})
    imgUrl:string;

    @Column({type: "int"})
    serviceFee: number;

    @Column({type: "int"})
    price: number;

    // @Column({type: "int"})
    // views: number;

    @Column({type: "int"})
    sale: number;

    @Column({type: "longtext"})
    description: string;

    @Column({type: "varchar", length: 255, nullable: true})
    status: string;

    @Column({type: "varchar", length: 255, nullable: true})
    type: string;

    @Column({type: "varchar", length: 255, nullable: true})
    note: string;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.id)
    restaurant: Restaurant

    @OneToMany(() => ImageFood, (imageFood) => imageFood.food)
    imageFood: ImageFood[]
}