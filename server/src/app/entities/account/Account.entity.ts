import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class AccountEntity {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    username: string;

    @Column()
    password: string;

}