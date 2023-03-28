import { Order_Status, Order_type, Payment_Method } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class ReviewDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;
  @IsNotEmpty()
  @IsNumber()
  course_id: number;

  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  course_rating: number;
}
