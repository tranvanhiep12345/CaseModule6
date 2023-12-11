import {Router} from "express";
import userRouter from "./userRouter";
import restRouter from "./restRouter";
import foodRouter from "./foodRouter";
import imageFoodRouter from "./imageFoodRouter";
import orderDetailRouter from "./orderDetailRouter";
import orderRouter from "././orderRouter";

const router = Router();
router.use('/rests', restRouter);
router.use('/foods', foodRouter);
router.use('/imageFoods', imageFoodRouter);
router.use('/order-details', orderDetailRouter);
router.use('/orders', orderRouter);
router.use('/', userRouter);
export default router;