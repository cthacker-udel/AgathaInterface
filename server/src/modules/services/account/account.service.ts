import { Injectable } from "@nestjs/common";
import { EntityTarget, getConnection } from "typeorm";

@Injectable()
export class AccountService {

    private getMongoRepo<T>(repo: EntityTarget<T>) { return getConnection('mongo').getRepository<T>(repo) }

    

}