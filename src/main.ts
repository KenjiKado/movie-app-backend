import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dbService: PrismaService = app.get(PrismaService);
  dbService.enableShutdownHooks(app);
  app.setGlobalPrefix('api');
  await app.listen(4200);
}
bootstrap();
