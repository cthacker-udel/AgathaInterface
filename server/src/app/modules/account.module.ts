import { Module } from "@nestjs/common";
import { AccountController } from "server/src/app/controllers/account/account.controller";

@Module({
    controllers: [AccountController]
}) export class AccountModule {};
