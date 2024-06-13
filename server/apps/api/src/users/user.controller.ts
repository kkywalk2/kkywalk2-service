import { Controller, Get } from '@nestjs/common';

@Controller("/users")
export class UserController {

  @Get()
  get(): string {
    return "hey! i am user controller!";
  }
}
