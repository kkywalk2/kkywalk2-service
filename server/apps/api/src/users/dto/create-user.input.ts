import { IsEmail, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;
  
    @MinLength(8)
    @MaxLength(64)
    password: string;

    @MaxLength(64)
    nickname: String;
}
