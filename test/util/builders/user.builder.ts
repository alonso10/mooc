import { name, internet, date } from "faker";
import User from "src/user/domain/user";

export default class UserBuilder {
    private id: number;
    private name: string;
    private email: string;
    private birthDate: Date;

    constructor() {
        this.id = Math.floor(Math.random() * 100);
        this.name = name.findName();
        this.email = internet.email();
        this.birthDate = date.past();
    }

    public withId(id: number): UserBuilder {
        this.id = id;
        return this;
    }

    public withName(name: string): UserBuilder {
        this.name = name;
        return this;
    }

    public withEmail(email: string): UserBuilder {
        this.email = email;
        return this;
    }

    public withBirthDate(birthDate: Date): UserBuilder {
        this.birthDate = birthDate;
        return this;
    }

    public build(): User {
        return new User(this.id, this.name, this.email, this.birthDate);
    }

}