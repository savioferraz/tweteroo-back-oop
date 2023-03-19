import { Router } from "express";
import tweetsController from "../controllers/tweetsController";

const tweetsRouter = Router();

tweetsRouter.post("/tweets", tweetsController.postTweet);
tweetsRouter.get("/tweets", tweetsController.getTweets);
tweetsRouter.get("/tweets/:username", tweetsController.getUserTweets);

export default tweetsRouter;
