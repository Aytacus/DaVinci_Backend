import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'https://da-vinci-frontend.vercel.app' }); // frontend portuna izin ver
  await app.listen(3001);
}
bootstrap();
