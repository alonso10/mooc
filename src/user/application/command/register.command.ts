import { IsString, IsDateString, IsEmail } from "class-validator";

export class UserRegisterCommand {
    
    @IsString()
    public name: string;

    @IsEmail()
    public email: string;

    @IsDateString()
    public birthDate: string;
}
