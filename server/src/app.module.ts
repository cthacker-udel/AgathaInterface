import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './common/config/configuration';
import { AccountModule } from './app/modules/account.module';
import { AuthenticationModule } from './app/modules/authentication.module';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configuration],
      ignoreEnvFile: true
  }), AccountModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
