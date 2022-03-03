import { Module } from "@nestjs/common";
import { AuthenticationController } from "../controllers/authentication/authentication.controller";
import { AuthenticationService } from "../services/authentication/authentication.service";


@Module({
    controllers: [AuthenticationController],
    providers: [AuthenticationService]
}) export class AuthenticationModule {};