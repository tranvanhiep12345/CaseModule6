import {Router} from "express";
import foodController from "../controller/foodController";
import auth from "../middleware/jwt";

const foodRouter = Router();
foodRouter.use(auth)
foodRouter.get('/', foodController.findAll)
foodRouter.post('/', foodController.add)
foodRouter.delete('/:id', foodController.delete)
foodRouter.put('/:id', foodController.update)
foodRouter.get('/:id', foodController.findById);

export default foodRouter
