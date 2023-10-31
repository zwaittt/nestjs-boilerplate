import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class Logger implements NestMiddleware {
  constructor(
    private readonly config: ConfigService
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    
    // do logging with config

    console.log(req.path, req.params);
    await next();
    console.log(res.statusCode);
  }

}