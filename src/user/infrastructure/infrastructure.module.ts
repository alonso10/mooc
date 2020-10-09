import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRegisterHandler } from "../application/command/register.handler";
import { UserRegisterService } from "../domain/services/register.service";
import UserRepository from "../domain/user.repository";
import { UserMysqlRepository } from "./adapter/usermysql.repository";
import { UserEntity } from "./entity/user.entity";
import { userRegisterServiceProvider } from "./provider/register.service.provider";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [
        {
            provide: UserRepository,
            useClass: UserMysqlRepository
        },
        {
            provide: UserRegisterService,
            inject: [UserRepository],
            useFactory: userRegisterServiceProvider
        },
        UserRegisterHandler,
    ],
    exports: [
        UserRepository,
        UserRegisterService,
        UserRegisterHandler,
    ],
})
export default class UserInfrastructureModule { }
