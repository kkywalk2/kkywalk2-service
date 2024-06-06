import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    nickname: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;
}
