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
        return await this.repository.createQueryBuilder("orderDetail")
            .leftJoinAndSelect("orderDetail.food", "food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .delete()
            .from("orderDetail")
            .where("restaurant.id = :restId", { restId: restId })
            .execute()
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
}

export default new OrderDetailService()