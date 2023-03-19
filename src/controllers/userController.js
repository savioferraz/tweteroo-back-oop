class UserController {
  constructor() {
    this.users = [];
    this.signUp = this.signUp.bind(this);
    this.getLoggedUser = this.getLoggedUser.bind(this);
  }

  signUp(req, res) {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
      res.status(400).send("Todos os campos são obrigatórios!");
      return;
    }

    this.users.push({ username, avatar });

    res.status(200).send("OK deu tudo certo");
  }

  getLoggedUser(username) {
    return this.users.find((user) => user.username === username);
  }
}

export default new UserController();
