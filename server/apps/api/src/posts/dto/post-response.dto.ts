import { Expose } from 'class-transformer';

export class PostResponseDto {
  @Expose()
  id: number;

  @Expose()
  content: string;

  @Expose()
  linkUrl: string;

  @Expose()
  createdAt: Date;
}
