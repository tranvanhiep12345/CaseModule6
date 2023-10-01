import { AppDataSource } from "../data-source";
import { OrderDetail } from "../entity/orderDetail";

class OrderDetailService {

    private repository = AppDataSource.getRepository(OrderDetail)

    findAll = async () => {
        return await this.repository.createQueryBuilder("orderDetail")
            .leftJoinAndSelect("orderDetail.food", "food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .leftJoinAndSelect("orderDetail.informationOrder", "informationOrder")
            .leftJoinAndSelect("informationOrder.user", "user")
            .getMany()
    }

    deleteByRestaurantId = async (restId) => {
        let data = await this.findAllByRestId(restId)
        for (let index of data){
            await this.delete(index.id)
        }
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
        return await this.repository.createQueryBuilder("orderDetail")
            .leftJoinAndSelect("orderDetail.food", "food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .leftJoinAndSelect("orderDetail.informationOrder", "informationOrder")
            .leftJoinAndSelect("informationOrder.user", "user")
            .where("user.id = :userId", { userId: userId })
            .getMany()
    }

    findById = async (id) => {
        return await this.repository.find({
            where: {
                id: id
            },
            relations: {
                food: true,
                order: true
            }
        })
    }

    findAllByRestId = async (restId) => {
        return await this.repository.createQueryBuilder("orderDetail")
            .leftJoinAndSelect("orderDetail.food", "food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .select([
                "orderDetail.id",
                "orderDetail.quantity",
                "food.id",
                "restaurant.id"
            ])
            .where("restaurant.id = :id", {id: restId})
            .getMany()
    }
}

export default new OrderDetailService()