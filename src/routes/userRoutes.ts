import { Router } from "express";
import { createUserController } from "../useCase/Users/createUser";

const userRouter = Router();

userRouter.post("/sign-up", (req, res) =>
  createUserController.handle(req, res)
);

export default userRouter;
