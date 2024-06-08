import { Repository, DataSource } from "typeorm";
import { User } from "@app/entity/domain/user/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserQueryRepository extends Repository<User> {
    constructor(private dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

    async findById(id: number): Promise<User> {
        return await this.createQueryBuilder('user')
            .where('user.id = :id', { id })
            .getOneOrFail();
    }

    async findByEmail(email: string): Promise<User> {
        return await this.createQueryBuilder('user')
            .where('user.email = :email', { email })
            .getOneOrFail();
    }
}
