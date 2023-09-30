import {AppDataSource} from "../data-source";
import {Order} from "../entity/order";

class OrderService {

    private repository = AppDataSource.getRepository(Order)

    findAll = async () => {
        return await this.repository.createQueryBuilder("order")
            .leftJoinAndSelect("order.user", "user")
            .leftJoinAndSelect("order.orderDetail", "orderDetail")
            .leftJoinAndSelect("orderDetail.food", "food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .select([
                "order.id",
                "order.date",
                "order.address",
                "order.status",
                "user.id",
                "user.name",
                "user.phone",
                "food.name",
                "food.price",
                "food.serviceFee",
                "food.sale",
                "orderDetail.quantity",
                "restaurant.name",
                "restaurant.id"
            ])
            .getMany()
    }
    add = async (data) => {
        return await this.repository.save(data)
    }

    delete = async (id) => {
        return await this.repository.delete(id)
    }

    update = async (id, data) => {
        return await this.repository.update(id, data)
    }

    findAllByUserId = async (userId) => {
        return await this.repository.createQueryBuilder("order")
            .leftJoinAndSelect("order.user", "user")
            .leftJoinAndSelect("order.orderDetail", "orderDetail")
            .leftJoinAndSelect("orderDetail.food", "food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .select([
                "order.id",
                "order.date",
                "order.address",
                "order.status",
                "user.id",
                "user.name",
                "user.phone",
                "food.name",
                "food.price",
                "food.serviceFee",
                "food.sale",
                "orderDetail.quantity",
                "restaurant.name",
                "restaurant.id"
            ])
            .where("user.id = :id", {id: userId})
            .getMany()
    }
    findById = async(id) => {
        return await this.repository.createQueryBuilder("order")
            .leftJoinAndSelect("order.user", "user")
            .leftJoinAndSelect("order.orderDetail", "orderDetail")
            .leftJoinAndSelect("orderDetail.food", "food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .select([
                "order.id",
                "order.date",
                "order.address",
                "order.status",
                "user.id",
                "user.name",
                "user.phone",
                "food.name",
                "food.price",
                "food.serviceFee",
                "food.sale",
                "orderDetail.quantity",
                "restaurant.name",
                "restaurant.id"
            ])
            .where("order.id = :id", {id: id})
            .getMany()
    }

    findByRestaurantId = async(restId) => {
        return await this.repository.createQueryBuilder("order")
            .leftJoinAndSelect("order.user", "user")
            .leftJoinAndSelect("order.orderDetail", "orderDetail")
            .leftJoinAndSelect("orderDetail.food", "food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .select([
                "order.id",
                "order.date",
                "order.address",
                "order.status",
                "user.id",
                "user.name",
                "user.phone",
                "food.name",
                "food.price",
                "food.serviceFee",
                "food.sale",
                "orderDetail.quantity",
                "restaurant.name",
                "restaurant.id"
            ])
            .where("restaurant.id = :restId", {restId: restId})
            .getMany()
    }
}
export default new OrderService()