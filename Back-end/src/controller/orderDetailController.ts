import { Request, Response } from "express";
import orderDetailService from "../service/orderDetailService";

class OrderDetailController {
    findAll = async (req: Request, res: Response) => {
        let {userId, restId} = req.query
        if (userId == undefined && restId == undefined) {
            let data = await orderDetailService.findAll()
            res.json(data)
        } else if (userId != undefined && restId == undefined) {
            let data = await orderDetailService.findAllByUserId(userId)
            res.json(data)
        } else if (userId == undefined && restId != undefined){
            let data = await orderDetailService.findAllByRestId(restId)
            res.json(data)
        }
    }
    add = async (req: Request, res: Response) => {
        let data = await orderDetailService.add(req.body)
        res.json(data)
    }

    delete = async (req: Request, res: Response) => {
        let {restId, id} = req.query
        if(restId == undefined && id != undefined){
            await orderDetailService.delete(id)
            res.json('delete complete')
        } else if (restId != undefined && id == undefined){
            await orderDetailService.deleteByRestaurantId(restId)
            res.json('delete complete 1')
        }

    }

    update = async (req: Request, res: Response) => {
        await orderDetailService.update(req.params.id, req.body)
        res.json('edit complete')
    }
    findById = async (req: Request, res: Response) => {
        let data = await orderDetailService.findById(req.params.id)
        res.json(data)
    }
}
export default new OrderDetailController()