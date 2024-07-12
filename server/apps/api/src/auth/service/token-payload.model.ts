import { Role } from '@app/api/config/role/role.enum';

export class TokenPayload {
  sub: number;
  username: string;
  role: Role;
}
