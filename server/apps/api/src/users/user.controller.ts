import { UserService } from '@app/entity/domain/user/user.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from '@app/api/users/dto/create-user.dto';
import { Roles } from '@app/api/config/role/roles.decorator';
import { Role } from '@app/api/config/role/role.enum';
import { plainToInstance } from 'class-transformer';
import { UserResponseDto } from './dto/user-response.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() { email, nickname, password }: CreateUserDto) {
    const user = this.userService.create(email, password, nickname);
    return plainToInstance(UserResponseDto, user);
  }

  @Get(':id')
  findOne(@Param('id') id: number): UserResponseDto {
    const user = this.userService.findById(id);
    return plainToInstance(UserResponseDto, user);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id') id: number) {
    const user = this.userService.delete(id);
    return plainToInstance(UserResponseDto, user);
  }
}
