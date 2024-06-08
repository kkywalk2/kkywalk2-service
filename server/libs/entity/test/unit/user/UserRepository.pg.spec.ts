import { getPgTestTypeOrmModule } from "@app/entity/getPgTestTypeOrmModule";
import { User } from "@app/entity/domain/user/user.entity";
import { UserModule } from "@app/entity/domain/user/user.module";
import { UserQueryRepository } from "@app/entity/domain/user/user.query.repository";
import { Test, TestingModule } from "@nestjs/testing";
import { Repository } from "typeorm";

describe('UserQueryRepository', () => {
    let userRepository: Repository<User>;
    let userQueryRepository: UserQueryRepository;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [UserModule, getPgTestTypeOrmModule()],
        }).compile();

        userQueryRepository = module.get<UserQueryRepository>(UserQueryRepository);
        userRepository = module.get('UserRepository');

        expect(userQueryRepository as UserQueryRepository).toBeInstanceOf(UserQueryRepository);
    });

    afterEach(async () => {
        await userRepository.clear();
    });

    it('save', async () => {
        // given
        const nickname = 'kkywalk2';
        const email = 'kkywalk2@gmail.com';
        const password = '1234';
        const user = new User();
        user.email = email;
        user.password = password;
        user.nickname = nickname;

        // when
        const savedUser = await userRepository.save(user);

        // then
        expect(savedUser.id).toBeGreaterThanOrEqual(1);
    });

    it('findUserById', async () => {
        // given
        const nickname = 'kkywalk2';
        const email = 'kkywalk2@gmail.com';
        const password = '1234';
        const user = new User();
        user.email = email;
        user.password = password;
        user.nickname = nickname;

        const savedUser = await userRepository.save(user);

        // when
        const result = await userQueryRepository.findById(savedUser.id);

        // then
        expect(result.email).toBe(email);
    });
});
