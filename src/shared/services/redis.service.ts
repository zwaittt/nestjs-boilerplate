import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { Redis } from "ioredis";

@Injectable()
export class RedisSerive implements OnModuleInit, OnModuleDestroy {
  private redis: Redis;
  private prefix = '';
  constructor() {
    this.redis = new Redis({
      host: 'localhost',
      port: 6379,
      lazyConnect: true,
    });
  }

  async set(key: string, val: any, expire: number) {
    return this.redis.set(`${this.prefix}${key}`, val, 'EX', expire);
  }

  async get(key: string) {
    return this.redis.get(`${this.prefix}${key}`);
  }

  async onModuleInit() {
    return await this.redis.connect();
  }

  async onModuleDestroy() {
    return await this.redis.disconnect();
  }
}