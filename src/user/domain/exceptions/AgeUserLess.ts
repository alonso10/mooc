import { BussinesError } from "src/shared/infrastructure/exceptions/BussinesErrors";

export default class AgeUserLess extends BussinesError {
    constructor(message: string) {
        super(message, AgeUserLess.name);
    }
}