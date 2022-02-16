import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Account {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    username: string;

    @Column()
    password: string;

}