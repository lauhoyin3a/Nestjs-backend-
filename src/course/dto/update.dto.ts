import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Max,
  Min,
  IsNumber,
} from 'class-validator';
import { Status } from '@prisma/client';
export class UpdateDto {
  status: Status;

  name: string;

  price: number;

  total_duration: number;

  cover_image: string;

  intro_video: string;

  short_description: string;

  long_description: string;

  start_at: Date;
}
