import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {OrderDetail} from "./orderDetail";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 255, nullable: true})
    date: string;

    @Column({type: "varchar", length: 255, nullable: true})
    address: string;

    @Column({type: "varchar", length: 255, nullable: true})
    status: string;

    @ManyToOne(() => User, (user) => user.id)
    user: User

    @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
    orderDetail: OrderDetail[]
}