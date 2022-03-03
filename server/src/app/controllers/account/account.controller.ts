import { Controller, Get, HttpStatus, Param, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { AccountService } from "../../services/account/account.service";
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Controller("account")
export class AccountController {

    constructor(private authenticationService: AuthenticationService, private accountService: AccountService) {}

    @Post('login')
    async loginUser(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
        try {
            await this.authenticationService.validateCredentials(request);
        } catch (e) {
            console.log("error e ", e);
            response.status(HttpStatus.UNAUTHORIZED).send();
        }
    }

    @Post('create')
    async createUser(@Req() request: Request, @Res({ passthrough: true}) response: Response) {
        try {
            await this.accountService.createAccount(request);
        } catch (e) {
            console.log('createrror = ', e);
            response.status(HttpStatus.BAD_REQUEST).send();
        }
    }

    @Get(':username')
    async getAccount(@Req() request: Request, @Res({ passthrough: true}) response: Response) {
        try {
            
        } catch (e) {
            response.status(HttpStatus.BAD_REQUEST).send();
        }
    }

}