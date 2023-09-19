import {Request, Response} from "express";
import restService from "../service/restService";

class RestController {
    findAll = async (req: Request, res: Response) => {
        let {name, merchantName} = req.query
        if (name == undefined && merchantName == undefined) {
            let data = await restService.findAll()
            res.json(data)
        } else if (name != undefined && merchantName == undefined) {
            let data = await restService.findByName(name)
            res.json(data)
        } else if (name == undefined && merchantName != undefined) {
            let data = await restService.findAllRestByMerchant(merchantName)
            res.json(data)
        }
    }
    add = async (req: Request, res: Response) => {
        await restService.add(req.body)
        res.json('complete')
    }

    delete = async (req: Request, res: Response) => {
        await restService.delete(req.params.id)
        res.json('delete complete')
    }

    update = async (req: Request, res: Response) => {
        await restService.update(req.params.id, req.body)
        res.json('edit complete')
    }
    findById = async (req: Request, res: Response) => {
        let  restaurant= await restService.findById(req.params.id)
        res.json(restaurant);
    }
}
export default new RestController()