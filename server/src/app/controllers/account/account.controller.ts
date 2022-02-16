import { Controller, HttpStatus, Param, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Controller("account")
export class AccountController {

    constructor(private authenticationService: AuthenticationService) {}

    @Post('login')
    async loginUser(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
        try {
            const username = request.headers['username'];
            const password = request.headers['password'];
        } catch (e) {
            response.status(HttpStatus.UNAUTHORIZED).send();
        }
    }

    @Post('create')
    async createUser(@Req() request: Request, @Res({ passthrough: true}) response: Response) {



    }

}