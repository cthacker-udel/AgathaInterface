import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { createConnection } from 'typeorm';
import { AppModule } from './app.module';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
    await createConnection(configService.get('mongo'))
    app.enableCors();
    app.use(cors());
  await app.listen(4000);
}
bootstrap();
