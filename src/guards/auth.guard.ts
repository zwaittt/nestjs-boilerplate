import { CanActivate, ExecutionContext, HttpException, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = ctx.switchToHttp().getRequest();
    if (request.cookies?.['token']) {
      return true;
    }
    throw new HttpException('not authorized', 401);
  }
}