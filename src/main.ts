import { ValidationPipe } from '@nestjs/common/';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';




async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true//stupping out the elements that are not defined into our DTO
  })); //added new validation pipe, use the validation pipe logic globally everywhere
  await app.listen(3333);
}
bootstrap();
