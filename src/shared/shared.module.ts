import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./services/prisma.service";
import { RedisModule } from "./redis/redis.module";
import { ConfigModule } from '@nestjs/config';
import { default as BaseConfig } from 'config/base';
@Global()
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [
      BaseConfig
    ]
  }), RedisModule],
  providers: [PrismaService],
  controllers: [],
  exports: [PrismaService, RedisModule],
})
export class SharedModule {}

