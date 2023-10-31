import { Provider } from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';

export type RedisClient = Redis;

export const RedisProvider: Provider = {
  useFactory: (config: ConfigService): RedisClient => {
    const host = config.get('REDIS_HOST', 'localhost');
    const port = config.get('REDIS_PORT', 6379);
    const prefix = config.get('REDIS_PREFIX', 'redis:');
    return new Redis({
      host: host,
      port: port,
      keyPrefix: prefix,
    });
  },
  inject: [ConfigService],
  provide: 'REDIS_CLIENT',
};