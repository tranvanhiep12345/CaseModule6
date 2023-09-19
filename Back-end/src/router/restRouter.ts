import {Router} from "express";
import resController from "../controller/restController";
import auth from "../middleware/jwt";

const restRouter = Router();
// restRouter.use(auth)
restRouter.get('/', resController.findAll)
restRouter.post('/', resController.add)
restRouter.delete('/:id', resController.delete)
restRouter.put('/:id', resController.update)

export default restRouter
