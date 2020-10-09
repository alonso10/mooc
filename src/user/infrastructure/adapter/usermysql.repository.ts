import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Nullable } from "src/shared/Nullable";
import User from "src/user/domain/user";
import UserRepository from "src/user/domain/user.repository";
import { Repository } from "typeorm";
import { UserEntity } from "../entity/user.entity";

@Injectable()
export class UserMysqlRepository implements UserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>,
    ) { }

    async findByEmail(email: string): Promise<Nullable<User>> {
        const userFinded = await this.repository.findOne({ where: { email } });
        return new User(
            userFinded.id,
            userFinded.name,
            userFinded.email,
            userFinded.birthDate
        );
    }

    async store(user: User): Promise<void> {
        const entity = new UserEntity();
        entity.name = user.name;
        entity.email = user.email;
        entity.birthDate = user.birthDate;
        await this.repository.save(entity);
    }
}