import {AppDataSource} from "../data-source";
import {ImageFood} from "../entity/imageFood";

class ImageFoodService {

    private repository = AppDataSource.getRepository(ImageFood)

    findAll = async () => {
        return await this.repository.find({
            relations: {
                food: true
            }
        })
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

    findAllByFoodName = async (foodName) => {
        return await this.repository.createQueryBuilder("imageFood")
            .leftJoinAndSelect("imageFood.food", "food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .where("food.name LIKE :name", { name: `%${foodName}%` })
            .getMany()
    }

    findAllByFoodId = async (foodId) => {
        return await this.repository.createQueryBuilder("imageFood")
            .leftJoinAndSelect("imageFood.food", "food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .where("food.id = :id", { id: foodId })
            .getMany()
    }

    findAllImageByFoodType = async (foodType) => {
        return await this.repository.createQueryBuilder("imageFood")
            .leftJoinAndSelect("imageFood.food", "food")
            .leftJoinAndSelect("food.restaurant", "restaurant")
            .where("food.type LIKE :type", {type : `%${foodType}%`})
            .getMany()
    }
}
export default new ImageFoodService()