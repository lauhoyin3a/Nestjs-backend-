import { IsEmail, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class UpdateDto {
  @IsString()
  title: string;
  @IsString()
  cover_image: string;
  @IsString()
  content: string;
}
