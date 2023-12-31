import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { ZodValidationPipe } from 'nestjs-zod';
import { APP_PIPE } from '@nestjs/core';
import { SharedModule } from './shared/shared.module';
import { Logger } from './middlewares/logger.middleware';
import { SwaggerMiddleWare } from './middlewares/swagger.middleware';

@Module({
  imports: [CatModule, SharedModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Logger)
      .forRoutes('*');
    consumer.apply(SwaggerMiddleWare)
      .forRoutes('*');
  }
}