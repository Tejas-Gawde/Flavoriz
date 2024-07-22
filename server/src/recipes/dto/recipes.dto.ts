import {
  IsOptional,
  IsString,
  IsArray,
  ValidateIf,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';

export class RecipesDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  page?: number;

  @IsOptional()
  @ValidateIf((o) => typeof o.tags === 'string' || Array.isArray(o.tags))
  @IsArray()
  @IsString({ each: true })
  @Type(() => String)
  tags?: string | string[];
}
