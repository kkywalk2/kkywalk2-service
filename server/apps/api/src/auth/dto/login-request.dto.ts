import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class LoginRequestDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  @MaxLength(64)
  password: string;
}
