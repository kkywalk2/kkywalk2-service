import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/entity/domain/user/user.entity';
import { Module } from '@nestjs/common';
import { UserQueryRepository } from '@app/entity/domain/user/user.query.repository';
import { UserService } from '@app/entity/domain/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule, UserService],
  providers: [UserQueryRepository, UserService],
  controllers: [],
})
export class UserDomainModule {}
