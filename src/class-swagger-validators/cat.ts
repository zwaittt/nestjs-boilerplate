import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class Cat {
	@ApiProperty({ type: Number })
	id: number

	@ApiProperty({ type: String })
	email: string

	@ApiProperty({ type: String })
	name: string

	@ApiProperty({ type: Number })
	age: number

	@ApiPropertyOptional({ type: String })
	breed?: string

	@ApiProperty({ type: Date })
	birthTime: Date
}
