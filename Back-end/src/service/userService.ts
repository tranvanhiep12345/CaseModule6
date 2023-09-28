import { User } from "../entity/user";
import { AppDataSource } from "../data-source";
import {Like} from 'typeorm'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET } from "../middleware/jwt";

class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }
    register = async (user) => {
        let userFind = await this.userRepository.findOneBy({email: user.email})
        if(userFind){
            return 'Username already exists'
        } else {
            user.password = await bcrypt.hash(user.password, 10);
            return this.userRepository.save(user);
        }
    }

    checkUser = async (user) => {
        let userFind = await this.userRepository.findOneBy({ email: user.email });
        if (!userFind) {
            return 'User is not exist' ;
        } else {
            let passWordCompare = await bcrypt.compare(user.password, userFind.password);
            if (passWordCompare) {
                let payload = {
                    idUser: userFind.id,
                    email: userFind.email,
                    password: userFind.password,
                    role: userFind.role,
                };
                let token = jwt.sign(payload, SECRET, {
                    expiresIn: 36000 * 10 * 100,
                });
                return {payload, token}
            } else {
                return 'Password is wrong' ;
            }
        }
    }

    update = async (id, data) => {
        return this.userRepository.update(id, data)
    }

    findAll = async () => {
        return this.userRepository.find()
    }

    findByName = async (name) => {
        return this.userRepository.find({
            where: {
                name: Like(`%${name}%`)
            }
        });
    }
    findById = async (id)=>{
        return this.userRepository.find({
            where:{
                id: id
            },
            relations : {
                restaurant : true
            }
        })
    }
}

export default new UserService();