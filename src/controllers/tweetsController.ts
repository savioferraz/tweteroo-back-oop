import { Request, Response } from "express";
import { Tweet } from "../models/Tweet";

import userController from "./userController";

class TweetsController {
  private tweets: Tweet[];

  constructor() {
    this.tweets = [];

    this.postTweet = this.postTweet.bind(this);
    this.getTweets = this.getTweets.bind(this);
    this.getUserTweets = this.getUserTweets.bind(this);
    this.reverseTweets = this.reverseTweets.bind(this);
  }

  postTweet(req: Request, res: Response): Response {
    const { tweet, username } = req.body;

    if (!username || !tweet) {
      return res.status(400).send("Todos os campos são obrigatórios!");
    }

    const { avatar } = userController.getLoggedUser(username);

    this.tweets.push({ username, tweet, avatar });

    return res.status(201).send("OK, seu tweet foi criado");
  }

  getTweets(req: Request, res: Response): Response {
    const page = Number(req.query.page);

    if (page && page < 1) {
      return res.status(400).send("Informe uma página válida!");
    }

    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    if (this.tweets.length <= 10) {
      return res.send(this.reverseTweets());
    }

    return res.status(200).send(this.reverseTweets().slice(start, end));
  }

  getUserTweets(req: Request, res: Response): Response {
    const { username } = req.params;

    const tweetsDoUsuario = this.tweets.filter((t) => t.username === username);

    return res.status(200).send(tweetsDoUsuario);
  }

  private reverseTweets(): Tweet[] {
    return [...this.tweets].reverse();
  }
}

export default new TweetsController();
