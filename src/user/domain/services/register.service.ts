import UserAlreadyExists from "../exceptions/UserAlreadyExists";
import User from "../user";
import UserRepository from "../user.repository";

export class UserRegisterService {
    constructor(private readonly _userRepository: UserRepository) {}

    async run(user: User) {
        const userFinded = await this._userRepository.findByEmail(user.email);
        if (userFinded) {
            throw new UserAlreadyExists(`Email ${user.email} already`);
        }
        await this._userRepository.store(user); 
    }
}