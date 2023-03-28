import { Order_Status, Order_type, Payment_Method } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class OrderCourseDto {
  @IsNotEmpty()
  @IsNumber()
  order_id: number;
  @IsNotEmpty()
  @IsNumber()
  course_id: number;

  @IsNotEmpty()
  course_status: string;

  @IsNotEmpty()
  course_name: string;

  @IsNotEmpty()
  course_price: number;
}
