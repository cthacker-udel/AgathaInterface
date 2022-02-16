import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './common/config/configuration';
import { AuthenticationService } from './app/services/authentication/authentication.service';
import { AccountModule } from './app/modules/account.module';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configuration],
      ignoreEnvFile: true
  }), AccountModule],
  controllers: [],
  providers: [AuthenticationService],
})
export class AppModule {}
