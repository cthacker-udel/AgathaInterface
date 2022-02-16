import { Injectable } from "@nestjs/common";
import { createHmac } from "crypto";
import secret from "config/secret/secret";
import { Request } from "express";
import { EntityTarget, getConnection } from "typeorm";

@Injectable()
export class AuthenticationService {

    private hmac = createHmac('sha256', secret);
    private getMongoRepo<T>(repo: EntityTarget<T>) { return getConnection('mongo').getRepository<T>(repo) };
    
    async validateCredentials(req: Request) {

        const accountDBUser = this.getMongoRepo<
        // get database password via username
        // hash the passed password
        // compare, if valid then return true

    }
    
}