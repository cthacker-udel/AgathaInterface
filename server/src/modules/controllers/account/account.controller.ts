import { Controller, Get, Param } from "@nestjs/common";


@Controller("account")
export class AccountController {

    @Get('id/:id')
    async getAccountFromId(@Param('id') id: number) {

        

    }

}