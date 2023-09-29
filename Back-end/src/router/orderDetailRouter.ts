import {Router} from "express";
import auth from "../middleware/jwt";
import orderDetailController from "../controller/orderDetailController";

const orderDetailRouter = Router();
orderDetailRouter.use(auth)
orderDetailRouter.get('/', orderDetailController.findAll)
orderDetailRouter.post('/', orderDetailController.add)
orderDetailRouter.delete('/', orderDetailController.delete)
orderDetailRouter.put('/:id', orderDetailController.update)
orderDetailRouter.get('/:id', orderDetailController.findById)

export default orderDetailRouter
