import { Module } from '@nestjs/common';
import { HealthModule } from '@app/api/health/health.module';
import { UserModule } from '@app/api/users/user.module';
import { APP_GUARD } from '@nestjs/core';
import { DBModule } from '@app/entity/db.module';
import { RolesGuard } from '@app/api/config/role/roles.guard';
import { AuthModule } from '@app/api/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HealthModule,
    UserModule,
    DBModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class ApiModule {}
