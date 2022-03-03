import { AccountEntity } from './../../entities/account/Account.entity';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Request } from "express";
import { EntityTarget, getConnection } from "typeorm";
import { createHmac, Hmac } from 'crypto';
import secret from 'config/secret/secret';

@Injectable()
export class AccountService {

    private getMongoRepo<T>(repo: EntityTarget<T>) { return getConnection('mongo').getRepository<T>(repo) }
    private hmac: Hmac;

    async createAccount(req: Request) {
        try {
            this.hmac = createHmac('sha256', secret);
            // only check by username, no need for password
            const repo = this.getMongoRepo<AccountEntity>(AccountEntity);
            const result = await repo.find({ username: req.body.data.username as string });
            if (result.length > 0) {
                throw new HttpException('Username already exists', HttpStatus.BAD_REQUEST);
            }
            // valid username -- create account
            const newAccount = new AccountEntity();
            newAccount.username = req.body.data.username as string;
            this.hmac.update(req.body.data.password as string);
            const passHex = this.hmac.digest('hex');
            newAccount.password = passHex;
            newAccount.token = "";
            newAccount.tokendate = "";
            repo.save(newAccount);
            console.log("created account");
        } catch (e) {
            console.log('createerror = ', e);
            throw e;
        }
    }

    async getAccount(req: Request) {
        try {
            const repo = this.getMongoRepo<AccountEntity>(AccountEntity);
            const result = await repo.find({ username: req.headers['username'] as string });
            if (result) {
                return { username: result[0].username, tokendate: result[0].tokendate };
            }
            throw new HttpException("Username does not exist", HttpStatus.BAD_REQUEST);
        } catch (e) {
            throw e;
        }
    }

    

}