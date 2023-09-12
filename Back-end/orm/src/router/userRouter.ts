import {Router} from "express";
import userController from "../controller/userController";

const userRouter = Router();

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.post('/:id', userController.update);
userRouter.get('/', userController.findAll)

export default userRouter
