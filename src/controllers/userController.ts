import { Request, Response } from "express";
import { User } from "../models/User";

class UserController {
  users: User[];

  constructor() {
    this.users = [];

    this.signUp = this.signUp.bind(this);
    this.getLoggedUser = this.getLoggedUser.bind(this);
  }

  signUp(req: Request, res: Response): Response {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
      return res.status(400).send("Todos os campos são obrigatórios!");
    }

    this.users.push({ username, avatar });

    return res.status(200).send("OK deu tudo certo");
  }

  getLoggedUser(username: string): User {
    const user = this.users.find((user) => user.username === username);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return user;
  }
}

export default new UserController();
