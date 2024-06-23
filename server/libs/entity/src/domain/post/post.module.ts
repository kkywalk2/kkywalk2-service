import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Post } from "@app/entity/domain/post/post.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Post])],
    exports: [TypeOrmModule],
    providers: [],
    controllers: [],
})
export class UserDomainModule { }
