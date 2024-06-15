import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDomainModule } from '@app/entity/domain/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        UserDomainModule,
        JwtModule.register({
            global: true,
            secret: 'need something secret!',
            signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule { }
