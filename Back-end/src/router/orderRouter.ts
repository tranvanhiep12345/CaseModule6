import {Router} from "express";
import auth from "../middleware/jwt";
import orderController from "../controller/orderController";

const orderRouter = Router();
orderRouter.use(auth)
orderRouter.get('/', orderController.findAll)
orderRouter.post('/', orderController.add)
orderRouter.delete('/:id', orderController.delete)
orderRouter.put('/:id', orderController.update)
orderRouter.get('/:id',orderController.findById)

export default orderRouter
