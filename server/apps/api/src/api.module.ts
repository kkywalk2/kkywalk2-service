import { Module } from '@nestjs/common';
import { HealthModule } from '@app/api/health/health.module';
import { UserModule } from '@app/api/users/user.module';
import { APP_GUARD } from '@nestjs/core';
import { DBModule } from '@app/entity/db.module';
import { RolesGuard } from '@app/api/config/role/roles.guard';

@Module({
  imports: [
    HealthModule, 
    UserModule,
    DBModule,
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
