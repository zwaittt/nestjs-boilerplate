import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { patchNestJsSwagger } from 'nestjs-zod';

async function bootstrap() {
  patchNestJsSwagger();
  const app = await NestFactory.create(ApplicationModule);
  const options = new DocumentBuilder()
    .setTitle('NestJS App')
    .setDescription('The API description')
    .setVersion('1.0')
    // .setBasePath('api')
    // .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  app.enableCors({
    origin: "http://localhost:58235",
    credentials: true
  })
  await app.listen(3000);
}

bootstrap();