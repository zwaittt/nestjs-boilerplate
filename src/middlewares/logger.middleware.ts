import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Logger implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    console.log(req.path, req.params);

    await next();
    console.log(res.statusCode)
  }
}