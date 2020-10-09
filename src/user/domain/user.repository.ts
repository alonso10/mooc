import { Nullable } from "src/shared/Nullable";
import User from "./user";

export default abstract class UserRepository {
    abstract async findByEmail(email: string): Promise<Nullable<User>>;
    abstract async store(user: User): Promise<void>;
}