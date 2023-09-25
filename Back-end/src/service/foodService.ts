import {AppDataSource} from "../data-source";
import {Food} from "../entity/food";

class FoodService {

    private repository = AppDataSource.getRepository(Food)

    findAll = async () => {
        return await this.repository.createQueryBuilder("food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
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

    findByName = async (name) => {
        return await this.repository.createQueryBuilder("food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .where("food.name LIKE :name", {name: `%${name}%`})
            .getMany()
    }

    findAllByRestaurantName = async (restName) => {
        return await this.repository.createQueryBuilder("food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .leftJoinAndSelect("restaurant.user", "user")
            .where("restaurant.name LIKE :name", {name: `%${restName}%`})
            .getMany()
    }
    findAllByRestaurantId = async (restId) => {
        return await this.repository.createQueryBuilder("food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .leftJoinAndSelect("restaurant.user", "user")
            .where("restaurant.name = :id", {id: restId})
            .getMany()
    }
    findAllByMerchantName = async (merchantName) => {
        return await this.repository.createQueryBuilder("food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .leftJoinAndSelect("restaurant.user", "user")
            .where("user.name LIKE :name", {name: `%${merchantName}%`})
            .getMany()
    }
    findAllByMerchantId = async (merchantId) => {
        return await this.repository.createQueryBuilder("food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .leftJoinAndSelect("restaurant.user", "user")
            .where("user.id = :id", {id: merchantId})
            .getMany()
    }
    findById = async (id) => {
        return await this.repository.find({
            where: {
                id: id
            }
        })
    }

    findAllByType = async (type) => {
        return await this.repository.createQueryBuilder("food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .where("food.type LIKE :type", {type : `%${type}%`})
            .getMany()
    }

}

export default new FoodService()