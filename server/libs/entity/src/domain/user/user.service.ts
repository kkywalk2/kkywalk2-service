import { Injectable } from '@nestjs/common';
import { UserQueryRepository } from '@app/entity/domain/user/user.query.repository';
import { User } from '@app/entity/domain/user/user.entity';

@Injectable()
export class UserService {
  constructor(private userQueryRepository: UserQueryRepository) {}

  async findOne(email: string): Promise<User> {
    return await this.userQueryRepository.findByEmail(email);
  }

  testGetOne(id: number): User {
    return {
      id: id,
      email: 'kkywalk2@naver.com',
      password: '1234',
      nickname: 'jamgujang',
      isActive: true,
      createdAt: new Date(Date.now()),
    };
  }
}
