import { User } from "../../../models/User";
import { UserRepository } from "../../../repositories/UserRepository";

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  execute({ username, avatar }: User): void {
    if (!username || !avatar) {
      throw new Error("Todos os campos são obrigatórios!");
    }

    this.userRepository.createUser({ username, avatar });
  }
}
