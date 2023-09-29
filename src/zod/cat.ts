import * as z from "nestjs-zod/z"
import { createZodDto } from "nestjs-zod/dto"

export const CatModel = z.object({
  /**
   * @default {Generated by database}
   */
  id: z.number().int(),
  email: z.string(),
  name: z.string(),
  age: z.number(),
  breed: z.string().nullish(),
  birthTime: z.date(),
})

export class CatDto extends createZodDto(CatModel) {
}
