<<<<<<< HEAD
// import {Request, Response} from "express";
// import imageFoodService from "../service/imageFoodService";
//
// class ImageFoodController {
//     findAll = async (req: Request, res: Response) => {
//         let {foodId, foodName} = req.query
//         if (foodId == undefined && foodName == undefined) {
//             let data = await imageFoodService.findAll()
//             res.json(data)
//         } else if (foodId != undefined && foodName == undefined) {
//             let data = await imageFoodService.findAllByFoodId(foodId)
//             res.json(data)
//         } else if (foodId == undefined && foodName != undefined) {
//             let data = await imageFoodService.findAllByFoodName(foodName)
//             res.json(data)
//         }
//     }
//     add = async (req: Request, res: Response) => {
//         await imageFoodService.add(req.body)
//         res.json('complete')
//     }
//
//     delete = async (req: Request, res: Response) => {
//         await imageFoodService.delete(req.params.id)
//         res.json('delete complete')
//     }
//
//     update = async (req: Request, res: Response) => {
//         await imageFoodService.update(req.params.id, req.body)
//         res.json('edit complete')
//     }
// }
// export default new ImageFoodController()
=======
import {Request, Response} from "express";
import imageFoodService from "../service/imageFoodService";

class ImageFoodController {
    findAll = async (req: Request, res: Response) => {
        let {foodId, foodName, foodType} = req.query
        if (foodId == undefined && foodName == undefined && foodType == undefined) {
            let data = await imageFoodService.findAll()
            res.json(data)
        } else if (foodId != undefined && foodName == undefined && foodType == undefined) {
            let data = await imageFoodService.findAllByFoodId(foodId)
            res.json(data)
        } else if (foodId == undefined && foodName != undefined && foodType == undefined) {
            let data = await imageFoodService.findAllByFoodName(foodName)
            res.json(data)
        } else if (foodId == undefined && foodName == undefined && foodType != undefined){
            let data = await imageFoodService.findAllImageByFoodType(foodType)
            res.json(data)
        }
    }
    add = async (req: Request, res: Response) => {
        await imageFoodService.add(req.body)
        res.json('complete')
    }

    delete = async (req: Request, res: Response) => {
        await imageFoodService.delete(req.params.id)
        res.json('delete complete')
    }

    update = async (req: Request, res: Response) => {
        await imageFoodService.update(req.params.id, req.body)
        res.json('edit complete')
    }
}
export default new ImageFoodController()
>>>>>>> 3e1cea85231fe70da3cea44bcedea37dbbb3ab45
