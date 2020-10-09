import { Body, Controller, Post } from "@nestjs/common";
import { UserRegisterCommand } from "src/user/application/command/register.command";
import { UserRegisterHandler } from "src/user/application/command/register.handler";

@Controller('users')
export default class UserController {
    constructor(private readonly _userRegisterHandler: UserRegisterHandler) { }

    @Post()
    async register(@Body() userRegisterCommand: UserRegisterCommand) {
        await this._userRegisterHandler.run(userRegisterCommand);
        return 'User register successfully';
    }
}