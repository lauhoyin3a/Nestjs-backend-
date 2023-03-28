import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Max,
  Min,
  IsNumber,
} from 'class-validator';
import { Status } from '@prisma/client';
export class CourseDto {
  @IsNotEmpty()
  owner_id: number;
  @IsNotEmpty()
  status: Status;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  total_duration: number;
  @IsNotEmpty()
  cover_image: string;
  @IsNotEmpty()
  intro_video: string;
  @IsNotEmpty()
  short_description: string;
  @IsNotEmpty()
  long_description: string;
  @IsNotEmpty()
  start_at: Date;
}
