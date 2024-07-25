import { Body, Controller, Get, Post, Query, Request } from '@nestjs/common';
import { CreatePostDto } from '@app/api/posts/dto/create-post.dto';
import { Roles } from '@app/api/config/role/roles.decorator';
import { Role } from '@app/api/config/role/role.enum';
import { PostService } from '@app/entity/domain/post/post.service';
import { plainToInstance } from 'class-transformer';
import { PostResponseDto } from '@app/api/posts/dto/post-response.dto';

@Controller('/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @Roles(Role.User)
  async create(
    @Request() requestWithUser: any,
    @Body() createPostDto: CreatePostDto,
  ): Promise<PostResponseDto> {
    const { user } = requestWithUser;
    const result = this.postService.create(
      user.sub,
      createPostDto.originalLinkUrl,
    );
    return plainToInstance(PostResponseDto, result);
  }

  @Get()
  async getByUserId(
    @Query('userId') userId: number,
  ): Promise<PostResponseDto[]> {
    const result = await this.postService.getByUserId(userId);
    return plainToInstance(PostResponseDto, result);
  }
}
