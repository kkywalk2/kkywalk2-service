import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { PostType } from "@app/entity/domain/post/post.type"

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    content: string;

    @Column({ type: "varchar", length: 20 })
    public type: PostType;

    // TODO: type 별로 json property 구체화 하는 법?
    @Column({ type: 'text' })
    public properties;
}
