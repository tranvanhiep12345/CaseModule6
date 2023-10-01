import {Router} from "express";
import userRouter from "./userRouter";
import restRouter from "./restRouter";
import foodRouter from "./foodRouter";
<<<<<<< HEAD
=======
import imageFoodRouter from "./imageFoodRouter";
import orderDetailRouter from "./orderDetailRouter";
import orderRouter from "././orderRouter";
>>>>>>> 3e1cea85231fe70da3cea44bcedea37dbbb3ab45

const router = Router();
router.use('/rests', restRouter);
router.use('/foods', foodRouter);
<<<<<<< HEAD
// router.use('/imageFoods', imageFoodRouter);
=======
router.use('/imageFoods', imageFoodRouter);
router.use('/order-details', orderDetailRouter);
router.use('/orders', orderRouter);
>>>>>>> 3e1cea85231fe70da3cea44bcedea37dbbb3ab45
router.use('/', userRouter);
export default router;
