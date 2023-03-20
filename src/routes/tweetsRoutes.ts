import { Router } from "express";
import tweetsController from "../controllers/tweetsController";
import { getTweetController } from "../useCase/Tweets/getTweets";
import { postTweetController } from "../useCase/Tweets/postTweet";

const tweetsRouter = Router();

tweetsRouter.post("/tweets", (req, res) =>
  postTweetController.handle(req, res)
);
tweetsRouter.get("/tweets", (req, res) => getTweetController.handle(req, res));
tweetsRouter.get("/tweets/:username", tweetsController.getUserTweets);

export default tweetsRouter;
