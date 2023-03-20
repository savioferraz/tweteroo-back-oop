import { UserRepository } from "../../../repositories/UserRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserService } from "./createUserService";

const userRepository = UserRepository.getInstance();
const createUserSErvice = new CreateUserService(userRepository);
export const createUserController = new CreateUserController(createUserSErvice);
