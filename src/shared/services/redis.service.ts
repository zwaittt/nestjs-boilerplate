import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { Redis } from "ioredis";
import { ConfigService } from '@nestjs/config';
@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  
  private redis: Redis;
  private prefix = this.config.get('REDIS_PREFIX', '');
  
  constructor(private readonly config: ConfigService) {
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