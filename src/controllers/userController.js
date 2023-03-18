class userController {
  constructor() {
    this.users = [];
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
}
