import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@app/entity/user/User.entity";
import { Module } from "@nestjs/common";
import { UserQueryRepository } from "@app/entity/user/UserQueryRepository";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    exports: [TypeOrmModule],
    providers: [UserQueryRepository],
    controllers: [],
})
export class UserModule { }
