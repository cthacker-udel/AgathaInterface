import { AuthenticationModule } from './authentication.module';
import { Module } from "@nestjs/common";
import { AccountController } from "src/app/controllers/account/account.controller";
import { AccountService } from '../services/account/account.service';

@Module({
    imports: [AuthenticationModule],
    controllers: [AccountController],
    providers: [AccountService]
}) export class AccountModule {};
