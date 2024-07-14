import { Module } from '@nestjs/common';
import { PostDomainModule } from '@app/entity/domain/post/post.module';
import { PostController } from '@app/api/posts/post.controller';

@Module({
  imports: [PostDomainModule],
  controllers: [PostController],
  providers: [],
})
export class PostModule {}
