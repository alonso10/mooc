import { BussinesError } from "src/shared/infrastructure/exceptions/BussinesErrors";

export default class UserAlreadyExists extends BussinesError {
    constructor(message: string) {
        super(message, UserAlreadyExists.name);
    }
}