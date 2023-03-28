import { IsEmail, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class ArtDto {
  @IsNotEmpty()
  owner_id: number;
  @IsNotEmpty()
  category_id: number;
  @IsNotEmpty()
  title: string;
  @IsString()
  cover_image: string;
  @IsNotEmpty()
  content: string;
}
