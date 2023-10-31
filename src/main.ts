import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { patchNestJsSwagger } from 'nestjs-zod';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { ConfigService } from '@nestjs/config';
import RedisStore from 'connect-redis';
import { RedisService } from './shared/redis/redis.service';

async function bootstrap() {
  
  patchNestJsSwagger();
  
  const app = await NestFactory.create(ApplicationModule);

  const config = app.get(ConfigService);
  const redisService = app.get(RedisService);

  app.use(cookieParser(config.get('cookieSecret')));
  app.use(session({
    secret: config.get('cookieSecret', 'session-secret'),
    resave: false,
    store: new RedisStore({
      client: redisService.client,
      prefix: config.get('sessionPrefix', 'session:'),
    }),
    saveUninitialized: false,
    cookie: { secure: false }
  }));

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
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`server start running on http://localhost:${port}`)
}

bootstrap();