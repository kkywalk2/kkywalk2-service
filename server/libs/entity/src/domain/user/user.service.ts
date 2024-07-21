import { Injectable } from '@nestjs/common';
import { UserQueryRepository } from '@app/entity/domain/user/user.query.repository';
import { User } from '@app/entity/domain/user/user.entity';

@Injectable()
export class UserService {
  constructor(private userQueryRepository: UserQueryRepository) {}

  async create(
    email: string,
    password: string,
    nickname: string,
  ): Promise<User> {
    return await this.userQueryRepository.save({
      email: email,
      password: password,
      nickname: nickname,
      isActive: true,
      createdAt: new Date(Date.now()),
    });
  }

  async delete(id: number): Promise<User> {
    const user = await this.userQueryRepository.findById(id);
    return await this.userQueryRepository.remove(user);
  }

  async findById(id: number): Promise<User> {
    return await this.userQueryRepository.findById(id);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userQueryRepository.findByEmail(email);
  }
}
