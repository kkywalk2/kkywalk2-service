import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { CreatePostDto } from '@app/api/posts/dto/create-post.dto';
import { UserResponseDto } from '@app/api/users/dto/user-response.dto';
import { Roles } from '@app/api/config/role/roles.decorator';
import { Role } from '@app/api/config/role/role.enum';
import { PostService } from '@app/entity/domain/post/post.service';
import { plainToInstance } from 'class-transformer';

@Controller('/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @Roles(Role.User)
  async create(
    @Request() requestWithUser: any,
    @Body() createPostDto: CreatePostDto,
  ): Promise<UserResponseDto> {
    const { user } = requestWithUser;
    const result = this.postService.create(
      user.sub,
      createPostDto.originalLinkUrl,
    );
    return plainToInstance(UserResponseDto, result);
  }

  @Get()
  async getByUserId(
    @Param('userId') userId: number,
  ): Promise<UserResponseDto[]> {
    const result = await this.postService.getByUserId(userId);
    return plainToInstance(UserResponseDto, result);
  }
}
