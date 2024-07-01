import { Module } from '@nestjs/common';
import { AuthController } from '@app/api/auth/auth.controller';
import { AuthModule } from '@app/entity/domain/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AuthController],
  providers: [],
})
export class AuthControllerModule {}
