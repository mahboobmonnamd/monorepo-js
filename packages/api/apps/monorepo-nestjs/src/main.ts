import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('🚀 ~ file: main.ts ~ line 6 ~ bootstrap ~ app', app);
  await app.listen(3000);
}
bootstrap();
