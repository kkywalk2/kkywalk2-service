import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@app/entity/domain/user/user.entity";
import { Module } from "@nestjs/common";
import { UserQueryRepository } from "@app/entity/domain/user/user.query.repository";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    exports: [TypeOrmModule],
    providers: [UserQueryRepository],
    controllers: [],
})
export class UserModule { }
