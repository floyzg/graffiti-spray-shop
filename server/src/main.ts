import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Enable CORS
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE'],
  });

  // Serve static files from assets directory
  const assetsPath = join(process.cwd(), 'src', 'assets');
  app.useStaticAssets(assetsPath, {
    prefix: '/assets/',
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
void bootstrap();
