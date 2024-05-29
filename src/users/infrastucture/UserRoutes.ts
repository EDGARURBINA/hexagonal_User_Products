import { Router } from "express";
import { createUserController, ByIdUserController } from "./Dependecies";
import "../../Database/Conection"

const userRouter = Router();

userRouter.post('/',createUserController.run.bind(createUserController));
userRouter.get('/',ByIdUserController.run.bind(ByIdUserController));

export default userRouter;
