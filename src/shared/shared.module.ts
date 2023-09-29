import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./services/prisma.service";

@Global()
@Module({
  providers: [PrismaService],
  controllers: [],
  exports: [PrismaService],
})
export class SharedModule {}

