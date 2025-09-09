import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: 'https://da-vinci-frontend.vercel.app', // sadece senin frontendin
  });

  const port = process.env.PORT || 3001; // Render buraya kendi portunu koyar
  await app.listen(port);
}
bootstrap();
