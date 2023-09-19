import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Food} from "./food";

@Entity()
export class ImageFood {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 255})
    image: string;

    @ManyToOne(() => Food, (food) => food.id)
    food: Food

}
