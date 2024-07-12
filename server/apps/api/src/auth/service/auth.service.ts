import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@app/entity/domain/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './token-payload.model';
import { Role } from '@app/api/config/role/role.enum';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ accessToken: string }> {
    const user = await this.usersService.findOne(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload: TokenPayload = {
      sub: user.id,
      username: user.email,
      role: Role.User,
    };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
