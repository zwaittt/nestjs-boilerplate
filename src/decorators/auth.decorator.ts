import { UseGuards, applyDecorators, SetMetadata } from "@nestjs/common"
import { AuthGuard } from 'src/guards/auth.guard';
export const Auth = () => {
  return applyDecorators(UseGuards(AuthGuard));
}