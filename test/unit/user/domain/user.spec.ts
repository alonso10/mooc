import AgeUserLess from "src/user/domain/exceptions/AgeUserLess";
import UserBuilder from "test/util/builders/user.builder";

describe('User domain', () => {

    it('user invalid birth date', () => {
        return expect(async () => new UserBuilder().withBirthDate(new Date(2005, 10, 12)).build())
            .rejects
            .toStrictEqual(new AgeUserLess('User is too younger'));
    });

    it('user valid', () => {
        const user = new UserBuilder()
            .withBirthDate(new Date(2000, 1, 10))
            .withId(1)
            .build();
        expect(user.id).toEqual(1);
    });
});