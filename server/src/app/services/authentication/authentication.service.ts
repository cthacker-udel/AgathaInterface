import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { createHmac } from "crypto";
import secret from "config/secret/secret";
import { Request } from "express";
import { EntityTarget, getConnection } from "typeorm";
import { AccountEntity } from "../../entities/account/Account.entity";

@Injectable()
export class AuthenticationService {

    private hmac = createHmac('sha256', secret);
    private getMongoRepo<T>(repo: EntityTarget<T>) { return getConnection('mongo').getRepository<T>(repo) };
    
    async validateCredentials(req: Request) {

        const accountDB = this.getMongoRepo<AccountEntity>(AccountEntity);
        try {
            const userCredentials = await accountDB.findOne({ username: req.headers['username'] as string, password: req.headers['password'] as string});
            if (userCredentials) {
                this.hmac.update(req.headers['password'] as string);
                return this.hmac.digest('hex') === userCredentials.password && req.headers['username'] as string === userCredentials.username;
            }
        } catch (e) {
            throw new HttpException('Invalid Credentials', HttpStatus.BAD_REQUEST);
        }

    }
    
}