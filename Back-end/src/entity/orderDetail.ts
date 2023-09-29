import {Column, Entity, ManyToOne,  PrimaryGeneratedColumn} from "typeorm";
import {Order} from "./order";
import {Food} from "./food";

@Entity()
export class OrderDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "int"})
    quantity: number;

    @ManyToOne(() => Food, (food) => food.id)
    food: Food

    @ManyToOne(() => Order, (order) => order.orderDetail)
    order: Order

}