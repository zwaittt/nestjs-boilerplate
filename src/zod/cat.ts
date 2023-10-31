import * as z from "nestjs-zod/z"
import { createZodDto } from "nestjs-zod/dto"

export const catModel = z.object({
  id: z.number().int(),
  email: z.string().nullish(),
  name: z.string(),
  age: z.number().nullish(),
  breed: z.string().nullish(),
  birthTime: z.date().nullish(),
})

export class CatDto extends createZodDto(catModel) {
}
