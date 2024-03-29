import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )

  const config = new DocumentBuilder()
    .setTitle('API do Site Resgat Pet - StreamingAPI')
    .setDescription(
      'A presente API tem como objetivo cadastrar pets perdidos junto com um cadastro de usuarios',
    )
    .setVersion('1.0')
    .addTag('usuario')
    .addTag('formulario')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  useContainer(app.select(AppModule), { fallbackOnErrors: true })

  app.enableCors()
  await app.listen(3005);
}
bootstrap();
