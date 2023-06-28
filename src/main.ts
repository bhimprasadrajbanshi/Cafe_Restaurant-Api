import { NestFactory } from '@nestjs/core';
import { CafeModule } from './cafe/cafe.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(CafeModule);
  app.useGlobalPipes(
    new ValidationPipe()
  )
  await app.listen(3000);
}
bootstrap();
