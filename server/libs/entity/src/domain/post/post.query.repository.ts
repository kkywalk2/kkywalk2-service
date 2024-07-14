import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { LinkSummaryPost } from '@app/entity/domain/post/post.entity';

@Injectable()
export class PostQueryRepository extends Repository<LinkSummaryPost> {
  constructor(private dataSource: DataSource) {
    super(LinkSummaryPost, dataSource.createEntityManager());
  }

  async findByUserId(userId: number): Promise<LinkSummaryPost[]> {
    return await this.createQueryBuilder('post')
      .where('post.user_id = :userId', { userId })
      .getMany();
  }
}
