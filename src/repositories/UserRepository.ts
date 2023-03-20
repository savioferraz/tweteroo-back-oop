import { User } from "../models/User";

export class UserRepository {
  private users: User[];
  private static INSTANCE: UserRepository;

  constructor() {
    this.users = [];
  }

  public static getInstance(): UserRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new UserRepository();
    }

    return this.INSTANCE;
  }

  createUser({ username, avatar }: User): void {
    const user: User = new User(username, avatar);

    this.users.push(user);
  }

  getLoggedUser(username: string): User {
    const user = this.users.find((user) => user.username === username);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return user;
  }
}
