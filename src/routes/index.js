import { Router } from "express";
import tweetsRouter from "./tweetsRoutes.js";
import userRouter from "./userRoutes.js";

const router = Router();

router.use(userRouter);
router.use(tweetsRouter);

export default router;
