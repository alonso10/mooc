import { Injectable } from "@nestjs/common";
import { UserRegisterService } from "src/user/domain/services/register.service";
import User from "src/user/domain/user";
import { UserRegisterCommand } from "./register.command";

@Injectable()
export class UserRegisterHandler {
    constructor(private _userRegisterService: UserRegisterService) {}

    async run(userRegisterCommand: UserRegisterCommand) {
        await this._userRegisterService.run(
            new User(
                undefined,
                userRegisterCommand.name,
                userRegisterCommand.email,
                new Date(userRegisterCommand.birthDate)
            )
        );
    }
}
