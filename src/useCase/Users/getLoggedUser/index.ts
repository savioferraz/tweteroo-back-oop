import { UserRepository } from "../../../repositories/UserRepository";
import { GetLoggedUserService } from "./getLoggedUserService";

const userRepository = UserRepository.getInstance();
export const getLoggedUserService = new GetLoggedUserService(userRepository);
