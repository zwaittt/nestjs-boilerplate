import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./services/prisma.service";
import { RedisModule } from "./redis/redis.module";
import { RedisSerive } from "./services/redis.service";

@Global()
@Module({
  imports: [],
  providers: [PrismaService, RedisSerive],
  controllers: [],
  exports: [PrismaService, RedisSerive],
})
export class SharedModule {}

