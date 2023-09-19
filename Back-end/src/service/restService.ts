import {AppDataSource} from "../data-source";
import {Restaurant} from "../entity/restaurant";

class RestService {

    private repository = AppDataSource.getRepository(Restaurant)

    findAll = async () => {
        return await this.repository.find({
            relations: {
                user: true
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

    findByName = async (name) => {
        return await this.repository.createQueryBuilder("restaurant")
            .leftJoinAndSelect("restaurant.user", "user")
            .where("restaurant.name LIKE :name", { name: `%${name}%` })
            .getMany()
    }
    findAllRestByMerchant = async (merchantName) => {
        return await this.repository.createQueryBuilder("restaurant")
            .leftJoinAndSelect("restaurant.user", "user")
            .where("user.name LIKE :name", { name: `%${merchantName}%` })
            .getMany()
    }
    findById = async (id)=>{

    }

}
export default new RestService()