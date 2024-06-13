import { Module } from '@nestjs/common';
import { HealthModule } from '@app/api/health/health.module';
import { UserModule } from '@app/api/users/user.module';

@Module({
  imports: [HealthModule, UserModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
