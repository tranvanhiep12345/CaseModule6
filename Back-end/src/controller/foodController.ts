import {Request, Response} from "express";
import foodService from "../service/foodService";

class FoodController {
    findAll = async (req: Request, res: Response) => {
        let {name,restName} = req.query
        if (name == undefined && restName == undefined) {
            let data = await foodService.findAll()
            res.json(data)
        } else if (name != undefined && restName == undefined) {
            let data = await foodService.findByName(name)
            res.json(data)
        } else if (name == undefined && restName != undefined){
            let data = await foodService.findAllByRestaurant(restName)
            res.json(data)
        }
    }
    add = async (req: Request, res: Response) => {
        await foodService.add(req.body)
        res.json('complete')
    }

    delete = async (req: Request, res: Response) => {
        await foodService.delete(req.params.id)
        res.json('delete complete')
    }

    update = async (req: Request, res: Response) => {
        await foodService.update(req.params.id, req.body)
        res.json('edit complete')

    }
}
export default new FoodController()