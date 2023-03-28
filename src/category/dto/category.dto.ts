import { IsEmail, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CategoryDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  cover_image: string;
}
