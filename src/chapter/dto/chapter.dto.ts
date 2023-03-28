import { IsEmail, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class ChapterDto {
  @IsNotEmpty()
  course_id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  order: number;
}
