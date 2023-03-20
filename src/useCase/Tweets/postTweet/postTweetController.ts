import { Request, Response } from "express";
import { getLoggedUserService } from "../../Users/getLoggedUser";
import { PostTweeterService } from "./postTweetService";

export class PostTweetController {
  constructor(private postTweeterService: PostTweeterService) {}

  handle(req: Request, res: Response): Response {
    const { username, tweet } = req.body;

    this.postTweeterService.execute({ username, tweet });

    return res.status(201).send("OK, seu tweet foi criado");
  }
}
