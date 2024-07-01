import { Module } from '@nestjs/common';
import { HealthModule } from '@app/api/health/health.module';
import { UserModule } from '@app/api/users/user.module';
import { APP_GUARD } from '@nestjs/core';
import { DBModule } from '@app/entity/db.module';
import { RolesGuard } from '@app/api/config/role/roles.guard';
import { AuthModule } from '@app/entity/domain/auth/auth.module';
import { AuthControllerModule } from '@app/api/auth/auth.module';

@Module({
  imports: [
    HealthModule, 
    UserModule,
    AuthModule,
    DBModule,
    AuthControllerModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }
  ],
})
export class ApiModule {}
