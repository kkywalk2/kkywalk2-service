import { Module } from '@nestjs/common';
import { UserController } from '@app/api/users/user.controller';
import { UserDomainModule } from '@app/entity/domain/user/user.module';

@Module({
  imports: [UserDomainModule],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
