import { IsInt, IsDefined, IsString, IsOptional, IsDate } from "class-validator";
import "./";

export class Cat {
    @IsDefined()
    @IsInt()
    id!: number;

    @IsDefined()
    @IsString()
    email!: string;

    @IsDefined()
    @IsString()
    name!: string;

    @IsDefined()
    age!: number;

    @IsOptional()
    @IsString()
    breed?: string;

    @IsDefined()
    @IsDate()
    birthTime!: Date;
}
