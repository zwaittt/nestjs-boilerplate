import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// export function swaggerMiddleWare(req: Request, res: Response, next: NextFunction) {
//   console.log('swagger: ', req.baseUrl);
//   res.header({
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET, OPTIONS",
//   });
//   next();
// }


@Injectable()
export class SwaggerMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('swagger: ', req.originalUrl);
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
  });
    next();
  }
}
