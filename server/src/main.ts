import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { createConnection } from 'typeorm';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

    await createConnection(configService.get('mongo'))


  await app.listen(3000);
}
bootstrap();
