import { Test, TestingModule } from '@nestjs/testing';
import { createSandbox, SinonStubbedInstance } from 'sinon';
import { UserRegisterCommand } from 'src/user/application/command/register.command';
import { UserRegisterHandler } from 'src/user/application/command/register.handler';
import { UserRegisterService } from 'src/user/domain/services/register.service';
import User from 'src/user/domain/user';
import UserRepository from 'src/user/domain/user.repository';
import UserController from 'src/user/infrastructure/controller/user.controller';
import { userRegisterServiceProvider } from 'src/user/infrastructure/provider/register.service.provider';
import UserBuilder from 'test/util/builders/user.builder';
import { createStubObj } from 'test/util/stubs/creaye-object.stub';

const sinonSandBox = createSandbox();

describe('AppController', () => {
    let userControler: UserController;
    let userBuilder: User;
    let userRepository: SinonStubbedInstance<UserRepository>;


    beforeEach(async () => {
        userRepository = createStubObj<UserRepository>(['findByEmail', 'store'], sinonSandBox);
        const app: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [
                UserRegisterService, 
                UserRegisterHandler,
                {
                    provide: UserRepository,
                    useValue: userRepository,
                },
                {
                    provide: UserRegisterService,
                    inject: [UserRepository],
                    useFactory: userRegisterServiceProvider
                },
            ],
        }).compile();

        userControler = app.get<UserController>(UserController);        
    });

    describe('root', () => {
        it('should return {}', async () => {
            userRepository.store.returns(Promise.resolve());
            userBuilder = new UserBuilder().withBirthDate(new Date(2000, 1, 10)).build();
            const userRegisterCommand = new UserRegisterCommand();
            userRegisterCommand.name = userBuilder.name;
            userRegisterCommand.email = userBuilder.email;
            userRegisterCommand.birthDate = userBuilder.birthDate.toString();
            const response = await userControler.register(userRegisterCommand);
            expect(response).toBe('User register successfully');
        });
    });
});