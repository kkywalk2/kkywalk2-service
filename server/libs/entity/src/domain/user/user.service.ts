import { Injectable } from "@nestjs/common";
import { UserQueryRepository } from "./user.query.repository";
import { User } from "@app/entity/domain/user/user.entity";

@Injectable()
export class UserService {
    constructor(private userQueryRepository: UserQueryRepository) { }

    async findOne(email: string): Promise<User> {
        return await this.userQueryRepository.findByEmail(email);
    }
}
