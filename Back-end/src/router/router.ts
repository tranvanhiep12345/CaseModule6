import {Router} from "express";
import userRouter from "./userRouter";
import restRouter from "./restRouter";
import foodRouter from "./foodRouter";
import imageFoodRouter from "./imageFoodRouter";

const router = Router();
router.use('/rests', restRouter);
router.use('/foods', foodRouter);
router.use('/imageFoods', imageFoodRouter);
router.use('/', userRouter);
export default router;
