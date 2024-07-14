import { Injectable } from '@nestjs/common';
import { LinkSummaryPost } from '@app/entity/domain/post/post.entity';
import { OpenAIService } from '@app/utils/openai/openai.service';
import { PostQueryRepository } from '@app/entity/domain/post/post.query.repository';

@Injectable()
export class PostService {
  constructor(
    private readonly postQueryRepository: PostQueryRepository,
    private readonly openAIService: OpenAIService,
  ) {}

  async create(userId: number, linkUrl: string): Promise<LinkSummaryPost> {
    const openAIResponse = await this.openAIService.summarizeWebPage(linkUrl);
    return await this.postQueryRepository.save({
      userId: userId,
      linkUrl: linkUrl,
      content: openAIResponse.content,
      createdAt: new Date(),
    });
  }

  async getByUserId(userId: number): Promise<LinkSummaryPost[]> {
    return await this.postQueryRepository.findByUserId(userId);
  }
}
