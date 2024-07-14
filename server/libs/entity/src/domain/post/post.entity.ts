import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class LinkSummaryPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  content: string;

  @Column()
  linkUrl: string;

  @Column()
  createdAt: Date;
}
