import { UserRegisterService } from "src/user/domain/services/register.service";
import UserRepository from "src/user/domain/user.repository";

export function userRegisterServiceProvider(userRepository: UserRepository) {
    return new UserRegisterService(userRepository);
}
