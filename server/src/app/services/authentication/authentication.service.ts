import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { createHmac, randomBytes } from "crypto";
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
            this.hmac.update(req.headers['password'] as string);
            const passHex = this.hmac.digest('hex');
            const userCredentials = await accountDB.findOne({ username: req.headers['username'] as string, password: passHex});
            if (userCredentials) {
                await accountDB.update({ username: userCredentials.username, password: passHex }, { token: randomBytes(10).toString(), tokendate: new Date().toISOString() })
                return passHex === userCredentials.password && req.headers['username'] as string === userCredentials.username;
            }
        } catch (e) {
            throw new HttpException('Invalid Credentials', HttpStatus.BAD_REQUEST);
        }
    }

    async validateSession(req: Request) {
        const accountDB = this.getMongoRepo<AccountEntity>(AccountEntity);
        try {
            this.hmac.update(req.headers['password'] as string);
            const passHex = this.hmac.digest('hex');
            const userCreds = await accountDB.findOne({ username: req.headers['username'] as string, password: passHex });
            if (userCreds) {
                const tokenTime = new Date(userCreds.tokendate);
                const currTime = new Date();
                const diff = (currTime.getTime() - tokenTime.getTime()) * 60 * 60;
                if (diff > 30) {
                    // more then 30 minutes
                    throw new HttpException('Invalid Session', HttpStatus.BAD_REQUEST);
                }
                return true;
            }
        } catch (e) {
            throw e;
        }

    }
    
}