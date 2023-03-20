import { Request, Response } from "express";
import { CreateUserService } from "./createUserService";

export class CreateUserController {
  constructor(private createUserSErvice: CreateUserService) {}

  handle(req: Request, res: Response): Response {
    const { username, avatar } = req.body;

    this.createUserSErvice.execute({ username, avatar });

    return res.status(200).send("OK deu tudo certo");
  }
}
