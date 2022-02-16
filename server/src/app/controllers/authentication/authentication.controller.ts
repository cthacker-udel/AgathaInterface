import { Controller, Get, HttpException, HttpStatus, Req } from "@nestjs/common";
import { Request } from "express";
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Controller('auth')
export class AuthenticationController {

    constructor (private authenticationService: AuthenticationService ) {}

    @Get('validate_session')
    async validateSession(@Req() request: Request) {

        try {
            await this.authenticationService.validateSession(request);
        } catch (e) {
            throw new HttpException("Invalid Session", HttpStatus.BAD_REQUEST);
        }

    }


}