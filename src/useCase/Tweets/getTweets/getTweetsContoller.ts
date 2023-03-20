import { Request, Response } from "express";
import { GetTweetService } from "./getTweetsService";

export class GetTweetController {
  constructor(private getTweeterService: GetTweetService) {}

  handle(req: Request, res: Response): Response {
    const page: number = Number(req.query.page!);

    if (page && page < 1) {
      throw new Error("Informe uma página válida!");
    }

    const tweets = this.getTweeterService.execute(page);

    return res.status(200).send(tweets);
  }
}
