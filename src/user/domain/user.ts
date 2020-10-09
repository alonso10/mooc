import AgeUserLess from "./exceptions/AgeUserLess";

const MINIMUM_AGE = 18;

export default class User {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly birthDate: Date;

    constructor(id: number, name: string, email: string, birthDate: Date){
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.validateAge();
    }

    public validateAge(): void {
        const currentYear = (new Date()).getFullYear();
        const userAge = currentYear - this.birthDate.getFullYear();
        if (userAge <= MINIMUM_AGE) {
            throw new AgeUserLess('User is too younger');
        }
    }
}