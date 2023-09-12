import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 255})
    name: string;

    @Column({type: "varchar", length: 255})
    phone: string;

    @Column({type: 'varchar'})
    email: string

    @Column({type: "varchar", length: 255})
    address: string;

    @Column({type: "varchar", length: 255})
    imgUrl: string;

    @Column({type: "varchar", length: 255})
    type: string;

    @Column({type: "time"})
    startTime: string;

    @Column({type: "time"})
    endTime: string;

    @ManyToOne(() => User, (userObj) => userObj.id)
    user: User

}
