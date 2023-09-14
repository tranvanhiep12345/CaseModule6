import {AppDataSource} from "../data-source";
import {Food} from "../entity/food";

class FoodService{

    private repository = AppDataSource.getRepository(Food)

    findAll = async () => {
        return await this.repository.createQueryBuilder("food")
            .leftJoinAndSelect("food.restaurant","restaurant")
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
            .leftJoinAndSelect("food.restaurant","restaurant")
            .where("food.name LIKE :name", { name: `%${name}%` })
            .getMany()
    }

    findAllByRestaurant = async (restName) => {
        return await this.repository.createQueryBuilder("food")
            .leftJoinAndSelect("food.restaurant","restaurant")
            .where("restaurant.name LIKE :name", { name: `%${restName}%` })
            .getMany()
    }
    findById = async (id) => {
        return await this.repository.find(
            {where: {id: id}})
    }

}
export default new FoodService()