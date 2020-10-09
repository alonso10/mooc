import { Module } from "@nestjs/common";
import UserController from "./infrastructure/controller/user.controller";
import UserInfrastructureModule from "./infrastructure/infrastructure.module";

@Module({
    imports: [
        UserInfrastructureModule,
    ],
    controllers: [UserController]
})
export default class UserModule { }
