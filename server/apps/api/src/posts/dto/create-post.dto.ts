import { IsUrl } from 'class-validator';

export class CreatePostDto {
  @IsUrl()
  originalLinkUrl: string;
}
