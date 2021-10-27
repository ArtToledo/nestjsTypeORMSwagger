import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateUserRequest {
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  name: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Type(() => Number)
  age: number;
}
