import { Module } from '@nestjs/common';
import { AuthController } from '@app/api/auth/auth.controller';
import { UserDomainModule } from '@app/entity/domain/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '@app/api/auth/service/auth.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserDomainModule,
    JwtModule.registerAsync({
      global: true,
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '60s' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
