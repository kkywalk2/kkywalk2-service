import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LinkSummaryPost } from '@app/entity/domain/post/post.entity';
import { PostQueryRepository } from '@app/entity/domain/post/post.query.repository';
import { PostService } from '@app/entity/domain/post/post.service';
import { OpenAIModule } from '@app/utils/openai/openai.module';

@Module({
  imports: [TypeOrmModule.forFeature([LinkSummaryPost]), OpenAIModule],
  exports: [TypeOrmModule, PostService],
  providers: [PostQueryRepository, PostService],
  controllers: [],
})
export class PostDomainModule {}
