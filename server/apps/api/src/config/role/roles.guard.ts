import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@app/api/config/role/role.enum';
import { ROLES_KEY } from '@app/api/config/role/roles.decorator';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from '@app/entity/domain/auth/token-payload.model';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private jwtService: JwtService,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            const payload = await this.jwtService.verifyAsync<TokenPayload>(
                token,
                {
                    secret: 'need something secret!'
                }
            );
            request['user'] = payload;

            // TODO: role이 여러개 될 수 도 있을지...
            return requiredRoles.some((role) => payload.role === role);
        } catch {
            throw new UnauthorizedException();
        }
    }


    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
